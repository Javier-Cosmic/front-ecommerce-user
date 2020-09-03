import React from 'react';
import './assets/css/main.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import LoginMain from './components/login/LoginMain';
import Home from './components/home/HomeMain';
import CreateUser from './components/users/CreateUser';
import LoginState from './context/login/LoginState';
import AdminMain from './components/admin/AdminMain';
import tokenAuth from './config/token';
import PublicRoute from './route/PublicRoute';
import PrivateRoute from './route/PrivateRoute';

// mantener la sesion activa al refresh
const token = localStorage.getItem('token');
if (token) {
    tokenAuth(token);
}

function App() {
    return (
            <LoginState>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <PublicRoute
                            exact
                            path='/login'
                            component={LoginMain}
                        />
                        <PrivateRoute
                            path='/admin/create'
                            component={CreateUser}
                        />
                        <PrivateRoute
                            exact
                            path='/admin'
                            component={AdminMain}
                        />
                        <Route render={() => <h1>Error 404</h1>} />
                    </Switch>
                </Router>
            </LoginState>
    );
}

export default App;
