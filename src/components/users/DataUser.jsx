import React from 'react';

const DataUser = ({ users, deleteUser }) => {
    return (
        <>
            <tbody>
                <tr>
                    <td>{users.name}</td>
                    <td>{users.lastname}</td>
                    <td>{users.email}</td>
                    <td>{users.cellphone}</td>
                    <td>
                        <button
                            onClick={() => deleteUser(users._id)}
                            className='btn-delete'
                        >
                            Eliminar
                        </button>
                    </td>
                </tr>
            </tbody>
        </>
    );
};

export default DataUser;
