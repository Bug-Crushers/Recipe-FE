import React from 'react';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import { Route } from 'react-router-dom';
// import Facebook from './Components/Facebook';

function App() {
  return (
    <div className="App">
      Welcome to secret family recipe book
    <Route exact path='/' component={Register}/>
    <Route exact path='/login' component={Login} />  
    {/* <Facebook/>   */}

    </div>
  );
}

export default App;
