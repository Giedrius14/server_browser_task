import React from 'react';
import './App.scss';
import HomePage from '../pages/HomePage/HomePage';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import LoginPage from '../pages/LoginPage/LoginPage';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <PrivateRoute exact path="/" component={HomePage}></PrivateRoute>
      <Route path="/login" component={LoginPage} />
      <Redirect from="*" to="/" />
    </BrowserRouter>
  </div>
);

export default App;
