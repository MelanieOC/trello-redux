import React  from 'react';
import './SignUp.css';
import logo from './trello-logo-white.svg';
import { FormControl, FormGroup, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SignIn =()=>{
    return (
      <div align='center'>
        <div style={{ width: '450px',marginTop:'100px' }}>
          <Image src={logo} width='200px'/>
          <form className='sign'>
            <FormGroup bsSize='large'>
              <FormControl type="email" placeholder="Email" required/>
            </FormGroup>
            <FormGroup bsSize="large">
              <FormControl type="password" placeholder="Password" required/>
            </FormGroup>
            <Button type='submit'>Sign In</Button>
          </form>
          <a href='#'>Create a new account</a>
        </div>
      </div>
    );
}

export default SignIn;