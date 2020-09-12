import React, {useReducer} from 'react';
import AdminContext from './AdminContext';
import AdminReducer from './AdminReducer';
import AxiosUrl from '../../config/AxiosUrl';
import {MENU_TOGGLE,
    CREATE_USER, 
    MSG_ERROR,
    SHOW_HOME
} from '../../types';

const AdminState = ({children}) => {

    const initialState = {
        toggleMenu: false,
        home: true
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

    const createUser = async (formdata) => {

        try {

            const response = await AxiosUrl.post('/api/v1/users', formdata)
            console.log(response.data);
            
        } catch (error) {
            dispatch({
                type: MSG_ERROR,
                payload: error.response.data.msg
            })
        }

        // dispatch({
        //     type:CREATE_USER,
        //     payload: datauser
        // })
    }

    const values = {
        toggleMenu: state.toggleMenu,
        home: state.home,
        toggleButton,
        renderHome,
        createUser
    }

    return(
        <AdminContext.Provider value={values}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminState;