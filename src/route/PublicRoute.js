import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import LoginContext from '../context/login/LoginContext';

const PublicRoute = ({component: Component, ...rest}) => {

    const loginContext = useContext(LoginContext);
    const {isAuth, token} = loginContext;

    return (
        <Route {...rest} render={props => (
            !isAuth && !token
            ? <Component {...props} />
            : <Redirect to='/admin' />
        )} />
    )
}

export default PublicRoute;