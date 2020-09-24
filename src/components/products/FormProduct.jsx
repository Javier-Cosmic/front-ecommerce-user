import React, { useEffect, useRef } from 'react';

const FormProduct = ({
    onChange,
    onImage,
    onSubmit,
    product,
    inputRef,
    fileSelectedRef,
}) => {
    const { name, price, description, category, brand, stock } = product;
    const inputFocus = useRef();

    useEffect(() => {
        inputFocus.current.focus();
    }, []);

    return (
        <>
        <h1 className='title-form-product'>Crear producto</h1>
            <div className='container-form-product'>
            <form className='form-product' onSubmit={onSubmit}>
                <div className='box1'>
                    <label className='label-form'>Nombre producto</label>
                    <input
                        type='text'
                        value={name}
                        name='name'
                        onChange={onChange}
                        ref={inputFocus}
                    />
                    <label className='label-form'>Precio</label>
                    <input
                        type='number'
                        value={price}
                        name='price'
                        onChange={onChange}
                    />
                </div>
                <div className='box2'>
                    <label className='label-form'>Descripcion</label>
                    <input
                        type='text'
                        value={description}
                        name='description'
                        onChange={onChange}
                    />
                    <label className='label-form'>Categoria</label>
                    <input
                        type='text'
                        value={category}
                        name='category'
                        onChange={onChange}
                    />
                </div>
                <div className='box3'>
                    <label className='label-form'>Marca</label>
                    <input
                        type='text'
                        value={brand}
                        name='brand'
                        onChange={onChange}
                    />
                    <label className='label-form'>Stock</label>
                    <input
                        type='text'
                        value={stock}
                        name='stock'
                        onChange={onChange}
                    />
                </div>
                <div className='box4'>
                    <label className='label-form'>Imagen</label>
                    <div className='container-input'>
                        <input
                            ref={inputRef}
                            id='input-file'
                            type='file'
                            onChange={onImage}
                            name='selectedImage'
                        />
                        <label htmlFor='input-file'>
                            <i className='far fa-image icon-img'></i>Seleccionar
                            imagen
                        </label>
                        <span>
                            <p>Imagen seleccionada: </p>
                            <div className='container-img'>
                                <span
                                    ref={fileSelectedRef}
                                    id='file-selected'
                                ></span>
                            </div>
                        </span>
                    </div>
                    <button className='button btn-form' type='submit'>
                        agregar <i className='fas fa-plus icon-button'></i>
                    </button>
                </div>
            </form>
        </div>
        </>
    );
};

export default FormProduct;
