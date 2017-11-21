import React from 'react';
import logo from '../trello-logo-white.svg';
import { FormControl, FormGroup, Image, Button } from 'react-bootstrap';
import { NavLink, Redirect } from 'react-router-dom';
import { signIn } from '../actions/actions';

const SignIn = ({ user, login }) => {
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
          {login && <div className='error'>Invalid email or password</div>}
          <FormGroup bsSize='large'>
            <FormControl type="email" placeholder="Email" required inputRef={ref => { this.emailInput = ref; }} />
          </FormGroup>
          <FormGroup bsSize="large">
            <FormControl type="password" placeholder="Password" required inputRef={ref => { this.passwordInput = ref; }} />
          </FormGroup>
          <Button type="submit">Sign In</Button>
        </form>
        <NavLink className='signin' to='/signup'>Create a new account</NavLink>
      </div>
    </div>
  );
}

export default SignIn;