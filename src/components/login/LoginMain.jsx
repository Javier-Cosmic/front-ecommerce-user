import React, { useState, useContext, useRef, useEffect } from 'react';
import LoginContext from '../../context/login/LoginContext';

const LoginMain = () => {
    const loginContext = useContext(LoginContext);
    const { login, loading, message } = loginContext;

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
    };

    const onSubmit = (e) => {
        e.preventDefault();

        login(data);

        setData({
            email: '',
            password: '',
        });
    };

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <div className='container-login'>
            <div className='login'>
                <form onSubmit={onSubmit}>
                    <h1 className='login-title'>admin panel</h1>
                    <div>
                        <input
                            ref={inputRef}
                            type='email'
                            name='email'
                            placeholder='Ingresa tu correo'
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <input
                            type='password'
                            name='password'
                            placeholder='Ingresa tu contraseña'
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className='container-button'>
                        <div className='login-message'>
                            {loading && <h1>Cargando...</h1>}
                            {message && <h1>{message}</h1>}
                        </div>
                        <button className='button' type='submit'>Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default React.memo(LoginMain);
