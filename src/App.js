import React from 'react';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      Welcome to secret family recipe book
    <Route exact path='/' component={Login}/>
    <Route exact path='/register' component={Register} />    

    </div>
  );
}

export default App;
