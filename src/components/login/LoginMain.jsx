import React, { useState, useContext, useRef, useEffect } from 'react';
import LoginContext from '../../context/login/LoginContext';

const LoginMain = () => {
    const loginContext = useContext(LoginContext);
    const { login, loading, message } = loginContext;
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
            setAlert(false);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === '' || password.trim() === '') {
            setAlert(true)
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
    }, [message])

    return (
        <div className='container-login'>
            <div className='login'>
                <form onSubmit={onSubmit}>
                    <div className='container-elements'>
                        <h1 className='login-title'>admin panel</h1>
                        <i className="fas fa-user-cog icon-login"></i>
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
                        <div className='login-message'>
                            {loading && <h1 className='login-msg-loading'>Cargando...</h1>}
                            {message && <h1 className='login-msg-error'>{message}</h1>}
                            {alert && <h1 className='login-msg-loading'>Los campos son obligatorios</h1>}
                        </div>
                        <button className='button' type='submit'>Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default React.memo(LoginMain);
