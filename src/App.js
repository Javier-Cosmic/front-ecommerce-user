import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/login/LoginMain';
import Home from './components/home/HomeMain';
import CreateUser from './components/users/CreateUser';
import LoginState from './context/login/LoginState';
import AdminMain from './components/admin/AdminMain';
import ClientMain from './components/client/ClientMain';

function App() {
  return (
    <div>
      <LoginState>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={CreateUser} />
            <Route exact path='/admin' component={AdminMain} />
            <Route exact path='/client' component={ClientMain} />
          </Switch>
        </Router>
      </LoginState>
    </div>
  );
}

export default App;
