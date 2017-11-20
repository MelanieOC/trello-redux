import React from 'react';
import './SignUp.css';
import logo from '../trello-logo-white.svg';
import { FormControl, FormGroup, Image, Button } from 'react-bootstrap';
import { NavLink, Redirect } from 'react-router-dom';
import { signIn } from '../actions';

const SignIn = ({ user }) => {
  return (
    <div align='center'>
      {
        user && <Redirect to="/boards" />
      }
      <div style={{ width: '450px', marginTop: '100px' }}>
        <Image src={logo} width='200px' />
        <form className='sign' onSubmit={
          e => {
            e.preventDefault();
            signIn(this.emailInput.value, this.passwordInput.value)
          }
        }>
          <FormGroup bsSize='large'>
            <FormControl type="email" placeholder="Email" required inputRef={ref => { this.emailInput = ref; }} />
          </FormGroup>
          <FormGroup bsSize="large">
            <FormControl type="password" placeholder="Password" required inputRef={ref => { this.passwordInput = ref; }} />
          </FormGroup>
          <Button type="submit">Sign In</Button>
        </form>
        <NavLink className='hola' to='/signup'>Create a new account</NavLink>
      </div>
    </div>
  );
}
//<NavLink className='btn' to='/boards'>Sign In</NavLink>
export default SignIn;