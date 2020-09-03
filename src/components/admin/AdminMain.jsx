import React, {useContext} from 'react';
import LoginContext from '../../context/login/LoginContext';
import Sidebar from './Sidebar';

const AdminMain = () => {

    const loginContext = useContext(LoginContext);
    const {logout} = loginContext;

    return (
        <>
            <h1>Admin panel</h1>
            <Sidebar />
            
            <button onClick={() => logout()}>Cerrar sesion</button>
        </>
    )
}

export default AdminMain;