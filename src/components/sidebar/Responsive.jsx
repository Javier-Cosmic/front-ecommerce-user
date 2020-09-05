import React, {useContext} from 'react';
import AdminContext from '../../context/admin/AdminContext';

const Responsive = ({ children }) => {
    
    const adminContext = useContext(AdminContext);
    const {toggleButton, toggleMenu} = adminContext;

    return(
        <div onClick={toggleMenu ? toggleButton : null} className={toggleMenu ? 'overlay' : 'overlay over-hidden'}>
            <div className={toggleMenu ? 'sidebar-responsive' : 'sidebar-responsive hidden'}>
                {children}
            </div>
        </div>
    )
}

export default React.memo(Responsive);