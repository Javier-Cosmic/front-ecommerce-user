import React, { useReducer } from 'react';
import ProductContext from './ProductContext';
import ProductReducer from './ProductReducer';
import AxiosUrl from '../../config/AxiosUrl';
import { clear } from '../utils';
import {
    CREATE_PRODUCT,
    SHOW_PRODUCTS,
    DELETE_PRODUCT,
    MSG_SUCCESS,
    MSG_ERROR,
    CLEAN_FIELDS,
    LOADING, 
} from '../../types';

const ProductState = ({ children }) => {
    const initialState = {
        products: [],
        msgsuccess: null,
        msgerror: null,
        loading: false,
        errorvalidate: true
    };

    const [state, dispatch] = useReducer(ProductReducer, initialState);

    const loadingF = () => {
        dispatch({
            type: LOADING
        })
    }

    const createProduct = async (formData) => {
        try {
            loadingF();

            const response = await AxiosUrl.post('/api/v1/products', formData);

            dispatch({
                type: CREATE_PRODUCT,
                payload: response.data.product,
            });

            dispatch({
                type: MSG_SUCCESS,
                payload: response.data.msg,
            });

            clear(CLEAN_FIELDS, dispatch);

        } catch (error) {

            dispatch({
                type: MSG_ERROR,
                payload: error.response.data.msg,
            });

            clear(CLEAN_FIELDS, dispatch);
        }
    };

    const showProducts = async () => {
        try {
            loadingF();

            const response = await AxiosUrl.get('/api/v1/products');

            dispatch({
                type: SHOW_PRODUCTS,
                payload: response.data.products
            })
            
        } catch (error) {

            dispatch({
                type: MSG_ERROR,
                payload: error.response.data.msg,
            });

            clear(CLEAN_FIELDS, dispatch);
        }
    }

    const deleteProduct = async (id) => {
        try {
            loadingF();
            const response = await AxiosUrl.delete(`/api/v1/products/${id}`);

            dispatch({
                type: DELETE_PRODUCT,
                payload: id
            })

            dispatch({
                type: MSG_SUCCESS,
                payload: response.data.msg
            })

            clear(CLEAN_FIELDS, dispatch);

        } catch (error) {

            dispatch({
                type: MSG_ERROR,
                payload: error.response.data.msg,
            });

            clear(CLEAN_FIELDS, dispatch);
        }
    }
 
    const values = {
        createProduct,
        showProducts,
        deleteProduct,
        msgsuccess: state.msgsuccess,
        msgerror: state.msgerror,
        loading: state.loading,
        products: state.products,
        errorvalidate: state.errorvalidate
    };

    return (
        <ProductContext.Provider value={values}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductState;
