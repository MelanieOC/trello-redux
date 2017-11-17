import React  from 'react';
import './SignUp.css';
import logo from '../trello-logo-white.svg';
import { FormControl, FormGroup, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SignUp =()=>{
    return (
      <div align='center'>
        <div style={{ width: '450px',marginTop:'20px' }}>
          <Image src={logo} width='200px'/>
          <form className='sign'>
            <FormGroup bsSize='large'>
              <FormControl type="text" placeholder="First Name" required/>
            </FormGroup>
            <FormGroup bsSize="large">
              <FormControl type="text" placeholder="Last Name" required/>
            </FormGroup>
            <FormGroup>
              <FormControl type="email" placeholder="Email" required/>
            </FormGroup>
            <FormGroup bsSize='large'>
              <FormControl type="password" placeholder="Password" required/>
            </FormGroup>
            <FormGroup bsSize='large'>
              <FormControl type="password" placeholder="Confirm password" required/>
            </FormGroup>
            <NavLink to='/boards' className='btn'>Sign Up</NavLink>
          </form>
          <NavLink className='hola' to='/signin'>Sign in</NavLink>
        </div>
      </div>
    );
}

export default SignUp;