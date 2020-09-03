import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {

    return (
        <aside className='sidebar'>
            <nav>
                <ul>
                    <Link to='/admin/product'>Crear producto</Link>
                </ul>
                <ul>
                    <Link to='/admin/create'>Agregar administradores</Link>
                </ul>                
            </nav>
        </aside>
    )
}

export default Sidebar;