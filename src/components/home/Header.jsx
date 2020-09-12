import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LoginContext from '../../context/login/LoginContext';

const Header = () => {
    const loginContext = useContext(LoginContext);
    const { userdata } = loginContext;

    return (
        <header className='container-header'>
            <h1 className='title-header'>e-commerce shopping</h1>
            <nav>
                {userdata ? (
                    <Link className='link-header' to='/admin'>
                        Admin
                    </Link>
                ) : (
                    <Link className='link-header' to='/login'>
                        Login
                    </Link>
                )}
                <Link className='link-header' to='/allproducts'>
                    Productos
                </Link>
                <Link className='link-header' to='/cart'>
                    Carrito
                    <i className='fas fa-shopping-cart icon-cart'></i>
                </Link>
            </nav>
        </header>
    );
};

export default React.memo(Header);
