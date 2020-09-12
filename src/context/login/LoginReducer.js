import {
    LOADING,
    LOGIN_SUCCESS,
    GET_USER_AUTH,
    MSG_ERROR,
    CLEAR_MSG,
    LOGOUT,
    LINK
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case LOADING:
            return{
                loading: true,
                linkhome: false
            }

        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                isAuth: true,
                loading: false,
                token: action.payload.token
            }

        case GET_USER_AUTH:
            return{
                ...state,
                userdata: action.payload,
                isAuth: true,
                loading: false,
            }

        case LOGOUT:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                isAuth: false,
                userdata: null,
                loading: false,
                linkhome: true
            }

        case MSG_ERROR:{
            localStorage.removeItem('token');
            return{
                ...state,
                message: action.payload,
                loading: false,
                linkhome: false
            }
        }

        case CLEAR_MSG:{
            return{
                message: null,
                linkhome: true
            }
        }

        case LINK:{
            return{
                linkhome: action.payload,
                isAuth: false,
                userdata: null
            }
        }
    
        default:
            return state;
    }
}