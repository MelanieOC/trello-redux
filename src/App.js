import React, { Component } from 'react';
import SignUp from './Componentes/SignUp.js';
import SignIn from './Componentes/SignIn.js';
import logo from './trello-logo-white.svg';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import data from './data.js';
import './App.css';
const Header = () => {
  return (
    <header id='titulo'>
      <span>
        <a href='#'>
          <i class="fa fa-columns" aria-hidden="true"></i>
          <span> Boards</span>
        </a>
      </span>
      <Image src={logo} width='200px' />
      <span>
        <a href='#'>
          <span> User</span>
        </a>
        <a href='#'>
          <i class="fa fa-sign-out" aria-hidden="true"></i>
          <span> Sign Out</span>
        </a>
      </span>
    </header>
  );
}
const Boards = () => {
  const probando = ['hola', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  return (
    <Grid id='boards'>
      <h3>
        <i class="fa fa-user"></i>
        <span> My boards</span>
      </h3>
      <Row>
        {
          data.map((item, index) => {
            return (
              <Col md={3} key={index}>
                <a href='#'>
                  <div className='tarea'>
                    <h4>{item.name}</h4>
                  </div>
                </a>
              </Col>
            );
          })
        }
      </Row>
    </Grid>
  );
}
class BoardDetail extends Component {
  render(){
    const { board } = this.props;
    return(
      <Grid>
        <h3>
          {board.name}
        </h3>
        <div className='canvas'>
          <div >
        {
          Object.keys(board.tarjetas).map(item=>{
            const value = board.tarjetas[item];
            return(
              <div style={{width:'350px', marginRight:'10px', display:'inline-block'}}>
                <div className='tarea'>
                    <h4>{item}</h4>
                    {
                      value.map(a=><div className='tareal'>{a}</div>)
                    }
                  </div>
              </div>
            );
          })
        }
        </div>
        </div>
        </Grid>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BoardDetail board={data[0]} />
      </div>
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
