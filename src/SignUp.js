import React  from 'react';
import './SignUp.css';
import logo from './trello-logo-white.svg';
import { FormControl, FormGroup, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SignUp =()=>{
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

export default SignUp;