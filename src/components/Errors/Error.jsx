import React from 'react'
import Header from '../home/Header';

const Error = () => {
    return (
        <div>
            <Header />
            <h1><i className="fas fa-exclamation-triangle title-error"></i></h1> 
            <h1 className='title-error-sub'>Ruta no encontrada</h1>
        </div>
    )
}

export default Error;
