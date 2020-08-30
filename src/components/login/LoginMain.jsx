import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import LoginContext from '../../context/login/LoginContext';

const LoginMain = () => {

    const loginContext = useContext(LoginContext);
    const {login, loading, message} = loginContext;

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const {email, password} = data;

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        login(data);

        setData({
            email: '',
            password: ''
        })
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <label>Email</label>
                <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={onChange}
                    />
                <label>Password</label>
                <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={onChange}
                    />
                <button type='submit'>Ingresar</button>
                {loading && <h1>Cargando...</h1>}
                {message && <h1>{message}</h1>}
                <Link to='/register'>Registrarse</Link>
            </form>
        </div>
    )
}

export default React.memo(LoginMain);