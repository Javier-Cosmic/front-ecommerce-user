import React, {useReducer} from 'react';
import AdminContext from './AdminContext';
import AdminReducer from './AdminReducer';
import {MENU_TOGGLE} from '../../types';

const AdminState = ({children}) => {

    const initialState = {
        toggleMenu: false
    }

    const [state, dispatch] = useReducer(AdminReducer, initialState);

    const toggleButton = () => {
        dispatch({
            type: MENU_TOGGLE
        })
    }

    const values = {
        toggleMenu: state.toggleMenu,
        toggleButton
    }

    return(
        <AdminContext.Provider value={values}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminState;