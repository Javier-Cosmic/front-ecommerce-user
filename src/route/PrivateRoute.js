import React, {useContext, useLayoutEffect, useRef} from 'react';
import {Route, Redirect} from 'react-router-dom';
import LoginContext from '../context/login/LoginContext';
import AlertContext from '../context/alerts/AlertContext';
import IdleTimer from 'react-idle-timer';

const PrivateRoute = ({ component: Component, location, ...props}) => {

    const timerRef = useRef(null);

    const loginContext = useContext(LoginContext);
    const {userAuth, isAuth, token, logout} = loginContext;

    const alertContext = useContext(AlertContext);
    const {changeAlert} = alertContext;

    const automaticLogout = () => {
        logout();
        
        changeAlert('Se ha cerrado tu sesion por seguridad');
    }

    useLayoutEffect(() => {
        userAuth();

    }, [])

    return(
        <>
            <IdleTimer
                ref={timerRef}
                timeout={180*1000}
                onIdle={automaticLogout}
            >
            </IdleTimer>
            <Route {...props}
                render={
                    props => !isAuth && !token
                    ? <Redirect to='/login' />
                    : <Component {...props} />
                }
            />
        </>
    )
}

export default PrivateRoute;