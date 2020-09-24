import React, { useEffect, useContext } from 'react';
import ProductContext from '../../context/product/ProductContext';
import ProductData from './ProductData';

const ListProduct = () => {
    const productContext = useContext(ProductContext);
    const { showProducts, products, deleteProduct } = productContext;

    useEffect(() => {
        showProducts();
    }, []);

    return (
        <div className='table-product'>
            <table className='table-container-product'>
                <thead>
                    <tr>
                        <th>id product</th>
                        <th>nombre producto</th>
                        <th>marca</th>
                        <th>stock</th>
                        <th>accion</th>
                    </tr>
                </thead>
                {products.map((product) => (
                    <ProductData 
                        key={product._id} 
                        product={product} 
                        deleteProduct={deleteProduct}    
                    />
                ))}
            </table>
        </div>
    );
};

export default React.memo(ListProduct);
