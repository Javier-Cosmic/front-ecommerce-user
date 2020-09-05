import React, { useContext } from 'react';
import LoginContext from '../../context/login/LoginContext';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const loginContext = useContext(LoginContext);
    const { logout, userdata } = loginContext;

    return (
        <aside>
            <div className='sidebar-header-style'>
                <h1>Admin user : {userdata ? userdata.name : null}</h1>
                <div className='sidebar-header'>
                    <button
                        className='button btn-side'
                        onClick={() => logout()}
                    >
                        Cerrar sesion
                    </button>
                </div>
            </div>
            <nav className='sidebar-link'>
                <ul>
                    <div className='style-link'>
                        <li>
                            <i className='fas fa-folder-plus icon-sidebar'></i>
                            <NavLink
                                activeClassName='link-active'
                                to='/admin/create-product'
                            >
                                Crear producto
                            </NavLink>
                        </li>
                    </div>
                    <div className='style-link'>
                        <li>
                            <i className='fas fa-user-plus icon-sidebar'></i>
                            <NavLink
                                activeClassName='link-active'
                                to='/admin/create-user'
                            >
                                Agregar administrador
                            </NavLink>
                        </li>
                    </div>
                    <div className='style-link'>
                        <li>
                            <i className='fas fa-user-edit icon-sidebar'></i>
                            <NavLink
                                activeClassName='link-active'
                                to='/admin/edit-perfil'
                            >
                                Editar mi perfil
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </nav>
        </aside>
    );
};

export default React.memo(Sidebar);
