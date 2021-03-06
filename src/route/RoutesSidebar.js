import React from 'react';
import UserMain from '../components/users/UserMain';
import ProductMain from '../components/products/ProductMain';

export const routes = [
    {
        path: '/admin',
        exact: true,
        sidebar: () => <h1>Example sidebar</h1>,
        main: () => <h1 className='title-form-product'>Selecciona una accion en el menu</h1> 
    },
    {
        path: '/admin/create-product',
        sidebar: () => <h1>Example sidebar</h1>,
        main: () => <ProductMain /> 
    },
    {
        path: '/admin/create-user',
        sidebar: () => <h1>Example sidebar</h1>,
        main: () => <UserMain />
    }
]