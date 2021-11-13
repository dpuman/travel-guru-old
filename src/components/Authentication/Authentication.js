
import { Card, Form, Button } from 'react-bootstrap';
import './authentication.css'

import { useContext, useState, React } from 'react';
import { useHistory, useLocation } from 'react-router';
import { LocationContext } from '../../App';
import { resetPassword, SignInWithEmailAndPassword, CreateUserWithEmailAndPassword, handleSignOut, handleFbLogin, initializeLoginFramework, handleGoogleSignIn } from './manageAuthentication'

initializeLoginFramework();
const Authentication = () => {
    const { loggedInUser, setLoggedInUser } = useContext(LocationContext)
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isUser: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false,

    })
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        console.log(loggedInUser);
        console.log(user);
        debugger;
        if (redirect) {
            history.replace(from);
        }
    }

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }

    const handleInput = (event) => {
        console.log(event.target.name + event.target.value);

        let isValidInput = true;

        if (event.target.name === 'email') {
            isValidInput = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {

            const checkNumber = /\d{1}/.test(event.target.value);
            const checkLength = event.target.value.length > 6;
            isValidInput = checkNumber && checkLength;
        }

        if (isValidInput) {
            const newU = { ...user }
            newU[event.target.name] = event.target.value;
            setUser(newU);
        }
    }


    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            // debugger;
            CreateUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })


        }

        if (!newUser && user.email && user.password) {
            debugger;
            SignInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();
    }



    return (
        <div className='d-flex  justify-content-center'>
            <Card style={{ width: '570px' }}>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        {!newUser ? <div> <h3>Log in</h3>

                            <Form.Group className="mb-3">
                                <Form.Control onBlur={handleInput} name='email' type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control onBlur={handleInput} name='password' type="password" placeholder="Password" />
                            </Form.Group>
                        </div> :
                            <div>
                                <h3>Create an account</h3>
                                <Form.Group className="mb-3 input">
                                    <Form.Control onBlur={handleInput} name='name' type="text" placeholder="First Name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control onBlur={handleInput} type="text" placeholder="Last Name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control onBlur={handleInput} name='email' type="email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control onBlur={handleInput} name='password' type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Control onBlur={handleInput} type="password" placeholder="Confirm Password" />
                                </Form.Group>
                            </div>

                        }


                        <input className='btn btn-warning w-100' type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />


                        <p className="text-center pt-2">
                            {newUser ? 'Already have an account' : 'Don’t have an account'} ?
                            <span onClick={() => setNewUser(!newUser)} className="text-warning login">
                                {newUser ? ' Login' : ' Create an account'}
                            </span>
                        </p>



                    </Form>

                    <p style={{ 'color': 'red' }}>{user.error}</p>
                    {
                        user.success && <p style={{ 'color': 'green' }}>Successfully user {newUser ? 'Created' : 'Log in'} </p>
                    }

                </Card.Body>
            </Card>
        </div>
    );
};

export default Authentication;