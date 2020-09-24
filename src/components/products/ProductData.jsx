import React from 'react'

const ProductData = ({ product, deleteProduct }) => {

    return (
        <tbody>
            <tr>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.stock}</td>
                <td>
                    <button className='btn-delete' onClick={() => deleteProduct(product._id)}>
                        <i className="fas fa-trash-alt"></i>    
                    </button>
                </td>
            </tr>
        </tbody>
    )
}

export default ProductData
