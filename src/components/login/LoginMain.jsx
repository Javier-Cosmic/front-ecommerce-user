import React, { useState, useContext, useRef, useEffect } from 'react';
import LoginContext from '../../context/login/LoginContext';
import AlertContext from '../../context/alerts/AlertContext';
import { Link } from 'react-router-dom';

const LoginMain = () => {
    const loginContext = useContext(LoginContext);
    const { login, loading, message, link, linkRender} = loginContext;

    const alertContext = useContext(AlertContext);
    const { alertmsg } = alertContext;

    const [alert, setAlert] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const inputRef = useRef();
    const { email, password } = data;

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        if (email.length > 6 || password.length > 6) {
            linkRender(true);
            setAlert(false);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === '' || password.trim() === '') {
            linkRender(false);
            setAlert(true);
            return;
        }

        login(data);
    };

    useEffect(() => {
        inputRef.current.focus();

        if (!message) {
            setData({
                email: '',
                password: '',
            });
            return;
        }

        return () => {
            console.log('limpiando message')
            
        }

    }, []);


    return (
        <div className='container-login'>
            <div className='login'>
                <form onSubmit={onSubmit}>
                    <div className='container-elements'>
                        <h1 className='login-title'>admin panel</h1>
                        <i className='fas fa-user-cog icon-login'></i>
                    </div>
                    <div>
                        <input
                            ref={inputRef}
                            type='email'
                            name='email'
                            placeholder='Ingresa tu correo'
                            value={email}
                            onChange={onChange}
                            className={alert ? 'input-error' : null}
                        />
                    </div>
                    <div>
                        <input
                            type='password'
                            name='password'
                            placeholder='Ingresa tu contraseña'
                            value={password}
                            onChange={onChange}
                            className={alert ? 'input-error' : null}
                        />
                    </div>
                    <div className='container-elements'>
                        {link ? (
                            <Link className='link-home' to='/'>Home</Link>
                        ) : (
                            <div className='login-message'>
                                {loading && (
                                    <h1 className='login-msg-loading margin'>
                                        Cargando... <div className='loading-spinner'></div>
                                    </h1>
                                )}
                                {message && (
                                    <h1 className='login-msg-error'>
                                        {message}
                                    </h1>
                                )}
                                {alert && (
                                    <h1 className='login-msg-loading'>
                                        Los campos son obligatorios
                                    </h1>
                                )}
                                {alertmsg && (
                                    <h1 className='login-msg-loading'>
                                        {alertmsg}
                                    </h1>
                                )}
                            </div>
                        )}
                        <button className='button' type='submit'>
                            Ingresar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default React.memo(LoginMain);
