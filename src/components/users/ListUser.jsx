import React, { useContext, useEffect } from 'react';
import DataUser from '../users/DataUser';
import AdminContext from '../../context/admin/AdminContext';

const ListUser = () => {
    const adminContext = useContext(AdminContext);
    const { showUsers, users, loading, deleteUser, editUser } = adminContext;

    useEffect(() => {
        showUsers();

        return () => {
            showUsers();
        }
        
    }, []);

    // const isEmpty = () => {
    //     if (users.length === 0) {
    //         return <tbody><td>No hay usuarios</td></tbody> 
    //     }
    // }

    return (
        <div className='container-table'>
            <table className='table-container'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Celular</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                {users.map(item => (
                    <DataUser 
                        key={item._id}
                        users={item}
                        deleteUser={deleteUser}
                        editUser={editUser}
                    />
                    ))
                }
            </table>
                {loading ? <div className='loading'><div className='spinner'></div></div>
                    : null
                }
        </div>
    );
};

export default React.memo(ListUser);
