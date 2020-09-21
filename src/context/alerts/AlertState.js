import React, { useReducer, useContext } from 'react';
import AlertContext from '../../context/alerts/AlertContext';
import { ALERT, CLEAR_ALERT, VALIDATE } from '../../types';
import LoginContext from '../../context/login/LoginContext';

const AlertState = ({ children }) => {
    const loginContext = useContext(LoginContext);
    const { linkRender } = loginContext;

    const initialState = {
        alert: null,
        validation: false,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case ALERT:
                return {
                    alert: action.payload,
                };

            case VALIDATE:
                return {
                    ...state,
                    validation: action.payload,
                };

            case CLEAR_ALERT:
                return {
                    alert: null,
                };

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const changeAlert = (message) => {
        dispatch({
            type: ALERT,
            payload: message,
        });
        linkRender(false);

        setTimeout(() => {
            dispatch({
                type: CLEAR_ALERT,
            });
            linkRender(true);
        }, 10000);
    };

    const validate = (boolean) => {
        dispatch({
            type: VALIDATE,
            payload: boolean
        });
    };

    const values = {
        alertmsg: state.alert,
        validation: state.validation,
        changeAlert,
        validate,
    };

    return (
        <AlertContext.Provider value={values}>{children}</AlertContext.Provider>
    );
};

export default AlertState;
