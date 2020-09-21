import { useState, useRef } from 'react';

const useForm = () => {

    const inputRef = useRef('');
    let fileSelectedRef = useRef();

    const [image, setImage] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const [datauser, setDatauser] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        cellphone: '',
    });

    const onChange = (e) => {
        setDatauser({
            ...datauser,
            [e.target.name]: e.target.value,
        });
    };

    const onImage = (e) => {
        const file = inputRef.current.files[0];

        let nameFile = e.target.files[0].name;
        if (nameFile !== undefined) {
            fileSelectedRef.current.textContent = nameFile;
        }

        setSelectedImage(file);
        previewImage(file);
    };

    const previewImage = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        };
    };

    return [
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
    ];
};

export default useForm;
