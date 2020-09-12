import React, { useState, useContext, useRef } from 'react';
import AdminContext from '../../context/admin/AdminContext';

const CreateUser = () => {
    const adminContext = useContext(AdminContext);
    const { createUser } = adminContext;
    const inputRef = useRef('');

    const [image, setImage] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const [datauser, setDatauser] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        cellphone: ''
    });

    const { name, lastname, email, password, cellphone } = datauser;

    const onChange = (e) => {
        setDatauser({
            ...datauser,
            [e.target.name]: e.target.value,
        })
    };

    const onImage = (e) => {
        const file = inputRef.current.files[0];
        
        setSelectedImage(file);
        previewImage(file);   
    }

    const previewImage = (file) => {
        const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImage(reader.result);
            };
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!selectedImage === true) {
            return;
        }
        
        const formData = new FormData();
        formData.append('selectedImage', selectedImage, selectedImage.name);
        formData.append('name', name);
        formData.append('lastname', lastname);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('cellphone', cellphone);

        createUser(formData);
    };

    return (
        <form
            onSubmit={onSubmit}
            style={{ display: 'flex', flexDirection: 'column' }}
        >
            <label>Nombre</label>
            <input type='text' name='name' value={name} onChange={onChange} />
            <label>Apellido</label>
            <input
                type='text'
                name='lastname'
                value={lastname}
                onChange={onChange}
            />
            <label>Email</label>
            <input
                type='email'
                name='email'
                value={email}
                onChange={onChange}
            />
            <label>Password temporal</label>
            <input
                type='password'
                name='password'
                value={password}
                onChange={onChange}
            />
            <label>Celular</label>
            <input
                type='tel'
                name='cellphone'
                value={cellphone}
                onChange={onChange}
            />
            <label>Foto de perfil</label>
            <input
                type='file'
                name='selectedImage'
                ref={inputRef}
                onChange={onImage}
            />
            <button type='submit'>Agregar</button>
            {image && (
                <img
                    src={image}
                    alt='preview'
                    style={{ width: '7rem' }}
                />
            )}
        </form>
    );
};

export default CreateUser;
