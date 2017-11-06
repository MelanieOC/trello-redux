import React, { Component } from 'react';
import SignUp from './Componentes/SignUp.js';
import SignIn from './Componentes/SignIn.js';
import logo from './trello-logo-white.svg';
import { Image, Navbar, Nav, NavItem } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <header id='titulo'>
        <Image src={logo} width='200px' />
      </header>
    )
  }
}
//<NavLink to='#'>Sign in</NavLink>
/*<Navbar id='titulo'>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
    </Nav>
    <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar> */
export default App;
