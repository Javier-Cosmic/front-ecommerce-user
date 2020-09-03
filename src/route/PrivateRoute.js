import React, {useContext, useLayoutEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import LoginContext from '../context/login/LoginContext';

const PrivateRoute = ({ component: Component, ...props}) => {

    const loginContext = useContext(LoginContext);
    const {userAuth, isAuth, token} = loginContext;

    useLayoutEffect(() => {
        userAuth();
    }, [])

    return(
        <Route {...props}
            render={
                props => !isAuth && !token
                ? <Redirect to='/login' />
                : <Component {...props} />
            }
        />
    )
}

export default PrivateRoute;