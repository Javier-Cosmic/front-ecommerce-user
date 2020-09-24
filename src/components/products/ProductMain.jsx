import React from 'react';
import CreateProduct from '../products/CreateProduct';
import ListProduct from '../products/ListProduct';

const ProductMain = () => {

    return (
        <div className='product-main'>
            <CreateProduct />
            <ListProduct />
        </div>
    )
}

export default ProductMain;