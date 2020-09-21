import {
    MENU_TOGGLE,
    SHOW_HOME,
    CREATE_USER,
    LOADING,
    SHOW_ALL_USER,
    CLEAR_MSG,
    MSG_ERROR,
    DELETE_USER,
    MSG_SUCCESS,
    EDIT_USER,
    UPDATE_USER,
    CLEAN_FIELDS
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case MENU_TOGGLE:
            return {
                ...state,
                toggleMenu: !state.toggleMenu,
            };

        case SHOW_HOME:
            return {
                home: false,
            };

        case LOADING:
            return {
                ...state,
                loading: true,
            };

        case SHOW_ALL_USER:
            return {
                users: action.payload,
                loading: false,
            };

        case CREATE_USER:
            return {
                users: [action.payload, ...state.users],
                loading: false,
            };

        case EDIT_USER:
            return {
                ...state,
                edituser: action.payload,
                edittitle: true
            }

        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map(user => user._id === state.edituser._id ? action.payload : user)
            }

        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(
                    (user) => user._id !== action.payload
                ),
                loading: false,
            };

        case CLEAN_FIELDS:
            return {
                ...state,
                edittitle: false
            }

        case MSG_SUCCESS:
            return {
                ...state,
                msgSuccess: action.payload,
                loading: false,
                errorvalidate: false
            };

        case MSG_ERROR: {
            return {
                ...state,
                msgError: action.payload,
                loading: false,
                errorvalidate: true
            };
        }

        case CLEAR_MSG: {
            return {
                ...state,
                msgSuccess: null,
                msgError: null,
                loading: false,
            };
        }

        default:
            return state;
    }
};
