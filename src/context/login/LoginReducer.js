import {
    LOADING,
    LOGIN_SUCCESS,
    GET_USER_AUTH,
    MSG_ERROR,
    LOGOUT
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case LOADING:
            return{
                loading: true
            }

        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                isAuth: true,
                loading: false
            }

        case GET_USER_AUTH:
            return{
                ...state,
                userAuth: action.payload,
                loading: false
            }

        case MSG_ERROR:{
            return{
                ...state,
                message: action.payload,
                loading: false
            }
        }
    
        default:
            return state;
    }
}