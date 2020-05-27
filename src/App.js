import React from 'react';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actitonCreators from './Redux/actionCreators';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      Welcome to secret family recipe book
      <Route exact path='/' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route path='/home' render={props => authCheck(Home, props)} />


    </div>
  );
}

function authCheck(Component, props) {
  if (localStorage.getItem('token')) {
    return <Component {...props} />
  }
  return <Redirect to='/login' />
}

export default withRouter(connect(state => state, actitonCreators)(App))
