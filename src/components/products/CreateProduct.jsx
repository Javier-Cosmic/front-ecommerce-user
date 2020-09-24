import React, { useState, useEffect, useContext, useRef } from 'react';
import ProductContext from '../../context/product/ProductContext';
import LoginContext from '../../context/login/LoginContext';
import FormProduct from './FormProduct';
import AlertContext from '../../context/alerts/AlertContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const CreateProduct = () => {
    const productContext = useContext(ProductContext);
    const { createProduct, msgsuccess, msgerror, loading, errorvalidate } = productContext;

    const loginContext = useContext(LoginContext);
    const { userdata } = loginContext;

    const alertContext = useContext(AlertContext);
    const { validation, validate } = alertContext;

    const inputRef = useRef();
    let fileSelectedRef = useRef();
    const [userid, setUserid] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        description: '',
        category: '',
        brand: '',
        stock: 0,
    });

    const { name, price, description, category, brand, stock } = product;

    const onChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
        setUserid(userdata._id);
    };

    const onImage = (e) => {
        const file = inputRef.current.files[0];

        let nameFile = e.target.files[0].name;
        if (nameFile !== undefined) {
            fileSelectedRef.current.textContent = nameFile;
        }

        setSelectedImage(file);
    };

    useEffect(() => {
        if(!errorvalidate){
            setProduct({
                name: '',
                price: 0,
                description: '',
                category: '',
                brand: '',
                stock: 0,
            })
            setSelectedImage('');
            fileSelectedRef.current.textContent = '';
        }
    }, [errorvalidate]);

    const onSubmit = (e) => {
        e.preventDefault();

        if (
            name.trim() === '' ||
            price === 0 ||
            description.trim() === '' ||
            category.trim() === '' ||
            brand.trim() === '' ||
            stock === 0
        ) {
            validate(true);

            setTimeout(() => {
                validate(false);
            }, 5600);
            return;
        }

        const formData = new FormData();
        formData.append('selectedImage', selectedImage);
        formData.append('product', JSON.stringify(product));
        formData.append('userid', userid);

        createProduct(formData);
    };

    return (
        <div>
            {loading && (
                <div className='loading'>
                    <div className='spinner'></div>
                </div>
            )}

            <FormProduct
                onChange={onChange}
                product={product}
                onImage={onImage}
                onSubmit={onSubmit}
                inputRef={inputRef}
                fileSelectedRef={fileSelectedRef}
            />
            <TransitionGroup>
                {validation ? (
                    <CSSTransition
                        in={validation}
                        timeout={200}
                        classNames='show'
                    >
                        <h1 className='form-error'>
                            Debes completar todos los campos
                        </h1>
                    </CSSTransition>
                ) : null}
                {msgerror && (
                    <CSSTransition
                        in={validation}
                        timeout={200}
                        classNames='show'
                    >
                        <h1 className='form-error'>
                            <i className='fas fa-exclamation-circle icon-alert'></i>
                            {msgerror}
                        </h1>
                    </CSSTransition>
                )}
                {msgsuccess && (
                    <CSSTransition
                        in={validation}
                        timeout={200}
                        classNames='show'
                    >
                        <h1 className='form-success'>
                            <i className='fas fa-check-circle icon-alert'></i>
                            {msgsuccess}
                        </h1>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default React.memo(CreateProduct);
