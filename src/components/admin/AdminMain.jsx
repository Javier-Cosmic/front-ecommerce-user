import React from 'react';
import { routes } from '../../route/RoutesSidebar';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Admin from '../admin/Admin';
import AdminHeader from './AdminHeader';

const AdminMain = () => {
    return (
        <>
            <AdminHeader />
            <Router>
                <div className='container-admin'>
                    <Admin />
                    <div className='component-admin'>
                        {routes.map((route) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                exact={true}
                                component={route.main}
                            />
                        ))}
                    </div>
                </div>
            </Router>
        </>
    );
};

export default AdminMain;
