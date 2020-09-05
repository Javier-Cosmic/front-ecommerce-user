import React, {useEffect} from 'react';
import { routes } from '../../route/RoutesSidebar';
import Admin from '../admin/Admin';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const AdminMain = () => {

    useEffect(() => {
        setTimeout(() => {
            localStorage.removeItem('token');
            
        }, 900000)

    }, []);

    return (
        <div className='container-admin'>
            <Router>
                <Admin />
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        exact={true}
                        component={route.main}
                    />
                ))}
            </Router>
        </div>
    );
};

export default AdminMain;
