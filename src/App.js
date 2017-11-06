import React, { Component } from 'react';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <SignIn />
      </div>
    )
  }
}
//<NavLink to='#'>Sign in</NavLink>

export default App;
