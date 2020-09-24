import React from 'react';
import './assets/css/main.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import LoginMain from './components/login/LoginMain';
import LoginState from './context/login/LoginState';
import AdminState from './context/admin/AdminState';
import AlertState from './context/alerts/AlertState';
import ProductState from './context/product/ProductState';
import AdminMain from './components/admin/AdminMain';
import tokenAuth from './config/token';
import PublicRoute from './route/PublicRoute';
import PrivateRoute from './route/PrivateRoute';
import Error from './components/Errors/Error';
import Update from './components/Errors/Update';

// mantener la sesion activa al refresh
const token = localStorage.getItem('token');
if (token) {
    tokenAuth(token);
}

function App() {
    return (
        <LoginState>
            <AdminState>
                <AlertState>
                    <ProductState>
                    <Router>
                        <Switch>
                            <Route path='/cart' component={Update} />
                            <Route path='/allproducts' component={Update} />
                            <PublicRoute exact path='/' component={Update} />
                            <PublicRoute
                                exact
                                path='/login'
                                component={LoginMain}
                            />
                            <PrivateRoute exact path='/home' component={Update} />
                            <PrivateRoute path='/admin' component={AdminMain} />
                            <Route component={Error} />
                        </Switch>
                    </Router>
                    </ProductState>
                </AlertState>
            </AdminState>
        </LoginState>
    );
}

export default App;
