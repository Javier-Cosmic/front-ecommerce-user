import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <header className='container-header'>
            <h1 className='title-header'>e-commerce shopping</h1>
            <nav>
                <div className='container-links'>
                    <Link className='link-header' to='/allproducts'>Productos</Link>
                    <Link to='/cart'>Carrito<i className="fas fa-shopping-cart icon-cart"></i></Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;