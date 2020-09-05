import React, {useContext} from 'react';
import Sidebar from '../sidebar/Sidebar';
import Responsive from '../sidebar/Responsive';
import Desktop from '../sidebar/Desktop';
import AdminContext from '../../context/admin/AdminContext';

const Admin = () => {

    const adminContext = useContext(AdminContext);
    const {toggleMenu, toggleButton} = adminContext;

    return (
        <div>
            <button className={toggleMenu ? 'button-menu hamburguer':'button-menu'} onClick={toggleButton}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </button>

            <Responsive>
                <Sidebar/>    
            </Responsive>

            <Desktop>
                <Sidebar />
            </Desktop>
        </div>
    )
}

export default React.memo(Admin);