import React, { Component } from 'react';
import logo from './trello-logo-white.svg';
import { FormControl, FormGroup, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div align='center'>
        <div style={{ width: '450px',marginTop:'20px' }}>
          <Image src={logo} width='200px'/>
          <form id='signUp'>
            <FormGroup bsSize='large'>
              <FormControl type="text" placeholder="First Name" />
            </FormGroup>
            <FormGroup bsSize="large">
              <FormControl type="text" placeholder="Last Name" />
            </FormGroup>
            <FormGroup>
              <FormControl type="text" placeholder="Email" />
            </FormGroup>
            <FormGroup bsSize='large'>
              <FormControl type="text" placeholder="Password" />
            </FormGroup>
            <FormGroup bsSize='large'>
              <FormControl type="text" placeholder="Confirm password" />
            </FormGroup>
            <Button type='submit'>Sign Up</Button>
          </form>
          <a href='#'>Sign in</a>
        </div>
      </div>
    );
  }
}
//<NavLink to='#'>Sign in</NavLink>

export default App;
