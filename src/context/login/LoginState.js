import React, {useReducer} from 'react';
import LoginContext from './LoginContext';
import LoginReducer from './LoginReducer';
import AxiosUrl from '../../config/AxiosUrl';
import tokenAuth from '../../config/token';
import {clear} from '../utils';
import { 
    LOADING, 
    LOGIN_SUCCESS,
    GET_USER_AUTH,
    MSG_ERROR,
    CLEAR_MSG,
    LOGOUT
} from '../../types';

const LoginState = ({ children }) => {

    const initialState = {
        loading: false,
        token: localStorage.getItem('token'),
        isAuth: false,
        userdata: null,
        message: null
    }

    const [state, dispatch] = useReducer(LoginReducer, initialState);

    const loadingF = () => {
        dispatch({
            type: LOADING
        })
    }

    const login = async (data) => {
        try {
            loadingF();
            const response = await AxiosUrl.post('/api/v1/login', data);
            
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            })

            userAuth();

        } catch (error) {
            dispatch({
                type: MSG_ERROR,
                payload: error.response.data.msg
            })  

            clear(CLEAR_MSG, dispatch);
        }
    }

    const userAuth =  async () => {
        
        const token = localStorage.getItem('token');
        if (token) {
            tokenAuth(token);
        }

        try {
            const response = await AxiosUrl.get('/api/v1/login');

            dispatch({
                type: GET_USER_AUTH,
                payload: response.data.user 
            })

        } catch (error) {
            dispatch({
                type: MSG_ERROR,
                payload: error.response.data.msg
            })

            clear(CLEAR_MSG, dispatch);
        }
    }

    const logout = () => {
        dispatch({
            type: LOGOUT
        })
    }

    const values = {
        userAuth,
        login,
        logout,
        userdata: state.userdata,
        token: state.token,
        isAuth: state.isAuth,
        loading: state.loading,
        message: state.message
    }

    return(
        <LoginContext.Provider value={values}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginState;