import React, { useContext } from 'react';
import LoginContext from '../../context/login/LoginContext';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const loginContext = useContext(LoginContext);
    const { userdata } = loginContext;

    return (
        <>
            <aside>
                <div className='sidebar-header-style'>
                    <h1>Admin panel</h1>
                </div>
                <div className='header-line'>
                    <div className='sidebar-header'>
                            <img
                                className='img-perfil'
                                src={
                                    userdata
                                        ? userdata.image_url
                                        : 'https://res.cloudinary.com/imgproyectos/image/upload/v1599614481/photo-users/default-user_cuowlr.jpg'
                                }
                                alt='avatar'
                            />
                    </div>
                    <div className='style-link-edit'>
                        {userdata && (
                            <h1>
                                {userdata.name} {userdata.lastname}
                            </h1>
                        )}
                    </div>
                </div>
                <h2 className='title-sidebar'>Ventas</h2>
                <nav className='sidebar-link'>
                    <ul>
                        <div className='style-link'>
                            <li>
                                <i className='fas fa-plus-square icon-sidebar'></i>
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
                                    Agregar usuario
                                </NavLink>
                            </li>
                        </div>
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default React.memo(Sidebar);
