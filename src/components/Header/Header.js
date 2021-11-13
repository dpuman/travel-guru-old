import React, { useContext } from 'react';
import { Button, Container, Form, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import { useLocation } from 'react-router';
import './header-background.css';
import { BsSearch } from 'react-icons/bs';
import './Header.css';
import { LocationContext } from '../../App';

const Header = () => {
    const location = useLocation();
    const { user } = useContext(LocationContext);
    console.log({ user });
    // header-spacing header'
    return (
        <div className={`${location.pathname === '/' || location.pathname.includes('booking') ? "header-spacing header" : "search"}`} >
            <Navbar bg="" expand="lg">
                <Container style={{ margin: ' 0px 150px' }} >
                    <Navbar.Brand href="#"> <Link to='/'>
                        <img style={{ width: '120.6px', height: '56px' }} src={logo} alt="Logo" />
                    </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className='ms-5 pt-3' id="navbarScroll">
                        <Nav
                            className="my-2 navbar-link my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Form style={{ width: '370px' }} className=" d-flex">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1"> <Button size="sm" variant="outline-dark"><BsSearch /></Button></InputGroup.Text>
                                    <FormControl
                                        type="search"
                                        placeholder="Search your destination..."
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                </InputGroup>
                            </Form>
                            <Nav.Link className='a-text px-5' href="#action1">News</Nav.Link>
                            <Nav.Link className='a-text px-5' href="#action2">Destination</Nav.Link>
                            <Nav.Link className='a-text px-5' href="#action1">Blog</Nav.Link>
                            <Nav.Link className='a-text px-5' href="#action2">Contact</Nav.Link>

                            <Nav.Link as={Link} style={{ marginTop: '-6px' }} className='text-light px-5' to='/login'>
                                <Button variant='warning' >Login</Button>{user}
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default Header;