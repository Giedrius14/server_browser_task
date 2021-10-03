import React from 'react';
import './App.scss';
import ServerList from '../pages/ServerList/ServerList';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import LoginPage from '../pages/LoginPage/LoginPage';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={ServerList}></PrivateRoute>
        <Route path="/login" component={LoginPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
