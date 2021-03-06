import React, { useContext, useEffect } from 'react';
import AdminContext from '../../context/admin/AdminContext';
import AlertContext from '../../context/alerts/AlertContext';
import useForm from '../hooks/useForm';
import Form from './Form';

const CreateUser = () => {
    const adminContext = useContext(AdminContext);
    const alertContext = useContext(AlertContext);
    const { validate } = alertContext;
    const {
        createUser,
        errorvalidate,
    } = adminContext;

    const [
        datauser,
        setDatauser,
        fileSelectedRef,
        image,
        onImage,
        inputRef,
        onChange,
        setImage,
        selectedImage,
        setSelectedImage
    ] = useForm();

    const {
        name,
        lastname,
        email,
        password,
        cellphone,
    } = datauser;

    useEffect(() => {
        if (!errorvalidate) {
            setDatauser({
                name: '',
                lastname: '',
                email: '',
                password: '',
                cellphone: '',
                newpassword: '',
            });
            setImage('');
            setSelectedImage('');
            fileSelectedRef.current.textContent = '';
        }
    }, [errorvalidate]);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (
            name === '' ||
            lastname === '' ||
            email === '' ||
            password === '' ||
            cellphone === 0 ||
            !selectedImage
        ) {
            validate(true);

            setTimeout(() => {
                validate(false);
            }, 5600);
            return;
        }

        const formData = new FormData();
        formData.append('selectedImage', selectedImage);
        formData.append('name', name);
        formData.append('lastname', lastname);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('cellphone', cellphone);

        createUser(formData);
    };

    return (
        <>
            <Form
                onSubmit={onSubmit}
                onChange={onChange}
                datauser={datauser}
                inputRef={inputRef}
                onImage={onImage}
                image={image}
                fileSelectedRef={fileSelectedRef}
            />
        </>
    );
};

export default React.memo(CreateUser);
