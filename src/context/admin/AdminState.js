import React, {useReducer} from 'react';
import AdminContext from './AdminContext';
import AdminReducer from './AdminReducer';
import AxiosUrl from '../../config/AxiosUrl';
import {clear} from '../utils';
import {MENU_TOGGLE,
    CREATE_USER,
    MSG_SUCCESS,
    MSG_ERROR,
    CLEAR_MSG,
    SHOW_HOME,
    LOADING,
    SHOW_ALL_USER,
    DELETE_USER,
    EDIT_USER,
    UPDATE_USER,
    CLEAN_FIELDS
} from '../../types';

const AdminState = ({children}) => {

    const initialState = {
        toggleMenu: false,
        home: true,
        msgSuccess: null,
        msgError: null,
        loading: false,
        users: [],
        edituser: null,
        errorvalidate: false,
        edittitle: false
    }

    const [state, dispatch] = useReducer(AdminReducer, initialState);

    const toggleButton = () => {
        dispatch({
            type: MENU_TOGGLE
        })
    }

    const renderHome = () => {
        dispatch({
            type: SHOW_HOME
        })
    }

    const loadingF = () => {
        dispatch({
            type: LOADING,
        });
    };

    const cleanFields = () => {
        dispatch({
            type: CLEAN_FIELDS
        })
    }

    const createUser = async (formdata) => {

        try {
            loadingF();

            const res = await AxiosUrl.post('/api/v1/users', formdata)

            dispatch({
                type: CREATE_USER,
                payload: res.data.users
            })

            dispatch({
                type: MSG_SUCCESS,
                payload: res.data.msg
            })

            clear(CLEAR_MSG, dispatch);
            
        } catch (error) {

            dispatch({
                type: MSG_ERROR,
                payload: error.response.data.msg
            })

            clear(CLEAR_MSG, dispatch, 5000);
        }
    }

    const showUsers = async () => {
        try {
            loadingF();

            const response = await AxiosUrl.get('/api/v1/users');

            dispatch({
                type: SHOW_ALL_USER,
                payload: response.data.users
            })

        } catch (error) {

            dispatch({
                type: MSG_ERROR,
                payload: error.response.data.msg
            })

            clear(CLEAR_MSG,dispatch, 5000);
        }
    }

    const deleteUser = async (id) => {
        try {
            loadingF();

            const response = await AxiosUrl.delete(`/api/v1/users/${id}`);

            dispatch({
                type: DELETE_USER,
                payload: id
            })

            dispatch({
                type: MSG_SUCCESS,
                payload: response.data.msg
            })

            clear(CLEAR_MSG,dispatch, 5000);

        } catch (error) {
            
            dispatch({
                type: MSG_ERROR,
                payload: error.response.data.msg
            })

            clear(CLEAR_MSG,dispatch, 5000);
        }
    }

    const editUser = async (user) => {
        try {
           dispatch({
                type: EDIT_USER,
                payload: user
            })

        } catch (error) {

            dispatch({
                type: MSG_ERROR,
                payload: error.response.data.msg
            }) 

            clear(CLEAR_MSG,dispatch, 5000);  
        }
    }

    const updateUser = async (data, id) => {
        try {
            loadingF();
            
            const response = await AxiosUrl.put(`/api/v1/users/${id}`, data)

            dispatch({
                type: UPDATE_USER,
                payload: response.data.useredit
            })

            dispatch({
                type: MSG_SUCCESS,
                payload: response.data.msg
            })

            clear(CLEAR_MSG,dispatch, 5000);

        } catch (error) {

            dispatch({
                type: MSG_ERROR,
                payload: error.response.data.msg
            }) 

            clear(CLEAR_MSG,dispatch, 5000);  
        }
    }

    const values = {
        toggleMenu: state.toggleMenu,
        home: state.home,
        msgsuccess: state.msgSuccess,
        msgerror: state.msgError,
        loading: state.loading,
        users: state.users,
        edituser: state.edituser,
        errorvalidate: state.errorvalidate,
        edittitle: state.edittitle,
        toggleButton,
        renderHome,
        createUser,
        showUsers,
        deleteUser,
        editUser,
        updateUser,
        cleanFields
    }

    return(
        <AdminContext.Provider value={values}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminState;