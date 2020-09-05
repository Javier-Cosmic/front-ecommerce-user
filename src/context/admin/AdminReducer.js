import {MENU_TOGGLE} from '../../types';

export default (state, action) => {
    switch(action.type){

        case MENU_TOGGLE:
            return{
                toggleMenu: !state.toggleMenu
            }

        default:
            return state;
    }
}