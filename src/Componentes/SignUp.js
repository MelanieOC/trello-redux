import React from 'react';
import './SignUp.css';
import logo from '../trello-logo-white.svg';
import { FormControl, FormGroup, Image, Button } from 'react-bootstrap';
import { NavLink, Redirect } from 'react-router-dom';
import { signUp } from '../actions';

const SignUp = ({ user }) => {
  return (
    <div align='center'>
      <div style={{ width: '450px', marginTop: '20px' }}>
        <Image src={logo} width='200px' />
        {
          user && <Redirect to="/boards" />
        }
        <form className='sign' onSubmit={
          e => {
            e.preventDefault();
            signUp(this.firstName.value, this.lastName.value, this.email.value, this.password.value)
          }}>
          <FormGroup bsSize='large'>
            <FormControl type="text" placeholder="First Name" inputRef={ref => { this.firstName = ref; }} required />
          </FormGroup>
          <FormGroup bsSize="large">
            <FormControl type="text" placeholder="Last Name" inputRef={ref => { this.lastName = ref; }} required />
          </FormGroup>
          <FormGroup bsSize='large'>
            <FormControl type="email" placeholder="Email" inputRef={ref => { this.email = ref; }} required />
          </FormGroup>
          <FormGroup bsSize='large'>
            <FormControl type="password" placeholder="Password" inputRef={ref => { this.password = ref; }} required />
          </FormGroup>
          <FormGroup bsSize='large'>
            <FormControl type="password" placeholder="Confirm password" required />
          </FormGroup>
          <Button type='submit' >Sign Up</Button>
        </form>
        <NavLink className='hola' to='/signin'>Sign in</NavLink>
      </div>
    </div>
  );
}
//<NavLink to='/boards' className='btn'>Sign Up</NavLink>
export default SignUp;