import {
    MENU_TOGGLE,
    SHOW_HOME
} from '../../types';

export default (state, action) => {
    switch(action.type){

        case MENU_TOGGLE:
            return{
                toggleMenu: !state.toggleMenu
            }

        case SHOW_HOME:
            return{
                home: false
            }

        default:
            return state;
    }
}