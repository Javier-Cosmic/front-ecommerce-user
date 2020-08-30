import React from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';

const HomeMain = () => {

    return (
        <>
            <Header />
            <h1>Home</h1>
            <Link to='/login'>Iniciar Sesion</Link>
        </>
    )
}

export default HomeMain;