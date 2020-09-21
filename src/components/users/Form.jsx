import React, { useRef, useEffect } from 'react';
import Title from '../users/Title';

const Form = ({
    onSubmit,
    onChange,
    name,
    lastname,
    email,
    password,
    cellphone,
    inputRef,
    onImage,
    image,
    fileSelectedRef,
}) => {
    const ref = useRef();

    useEffect(() => {
        ref.current.focus();
    }, []);

    return (
        <>
            <form onSubmit={onSubmit} className='form-container'>
                    <Title>
                        Agregar usuario
                        <i className='fas fa-user-circle icon-title-form'></i>
                    </Title>
                <label className='label-form'>Nombre</label>
                <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={onChange}
                    ref={ref}
                />
                <label className='label-form'>Apellido</label>
                <input
                    type='text'
                    name='lastname'
                    value={lastname}
                    onChange={onChange}
                />
                <label className='label-form'>Correo</label>
                <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={onChange}
                />
                <label className='label-form'>Clave temporal</label>
                <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={onChange}
                />
                <label className='label-form'>Celular</label>
                <input
                    type='number'
                    name='cellphone'
                    value={cellphone}
                    onChange={onChange}
                />
                <label className='label-form'>Foto de perfil</label>
                <div className='container-input'>
                    <input
                        id='input-file'
                        type='file'
                        name='selectedImage'
                        ref={inputRef}
                        onChange={onImage}
                    />
                    <label htmlFor='input-file'>
                        <i className='far fa-image icon-img'></i>Seleccionar
                        imagen
                    </label>
                    <span>
                        <p>Imagen seleccionada: </p>
                        <div className='container-img'>
                            {image && <img src={image} alt='preview' />}
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
            </form>
        </>
    );
};

export default Form;
