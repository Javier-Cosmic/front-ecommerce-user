import React, {useContext} from 'react';
import LoginContext from '../../context/login/LoginContext';
import {Link} from 'react-router-dom';

const AdminHeader = () => {

    const loginContext = useContext(LoginContext);
    const { logout } = loginContext;

    return (
        <div className='container-header-admin'>
            <div className='header-admin'>
                <Link to='/home'>
                    <i className='fas fa-home icon-admin'></i>home
                </Link>
                <button className='btn-logout' onClick={() => logout()}>
                    Cerrar sesion
                </button>
            </div>
        </div>
    );
};

export default React.memo(AdminHeader);
