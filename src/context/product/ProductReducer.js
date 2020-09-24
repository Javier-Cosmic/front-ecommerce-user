import {
    CREATE_PRODUCT,
    SHOW_PRODUCTS,
    DELETE_PRODUCT,
    MSG_SUCCESS,
    MSG_ERROR,
    CLEAN_FIELDS,
    LOADING,
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case CREATE_PRODUCT:
            return {
                ...state,
                products: [action.payload, ...state.products],
                loading: false,
            };

        case SHOW_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            };

        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(
                    (product) => product._id !== action.payload
                ),
                loading: false,
            };
            
        case LOADING:
            return {
                ...state,
                loading: true,
            };

        case MSG_SUCCESS:
            return {
                ...state,
                msgsuccess: action.payload,
                loading: false,
                errorvalidate: false
            };

        case MSG_ERROR:
            return {
                ...state,
                msgerror: action.payload,
                loading: false,
                errorvalidate: true
            };

        case CLEAN_FIELDS:
            return {
                ...state,
                msgsuccess: null,
                msgerror: null,
            };

        default:
            return state;
    }
};
