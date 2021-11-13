import React, { useContext } from 'react';
import {
    Route,
    Redirect,
} from "react-router-dom";
import { LocationContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

    const { loggedInUser, setLoggedInUser } = useContext(LocationContext);
    console.log(loggedInUser);

    return (
        <div>
            <Route
                {...rest}

                render={({ location }) =>

                    loggedInUser.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />

        </div>
    );
};

export default PrivateRoute;