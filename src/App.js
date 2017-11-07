import React, { Component } from 'react';
import SignUp from './Componentes/SignUp.js';
import SignIn from './Componentes/SignIn.js';
import logo from './trello-logo-white.svg';
import { Image, Grid, Row, Col, FormControl, FormGroup, Button } from 'react-bootstrap';
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
class Tarjeta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: false
    }
  }

  render() {
    const { tarjeta, tareas } = this.props;
    const change = () => {
      this.setState({
        add: !this.state.add
      })
    }
    return (
      <div style={{ width: '350px', marginRight: '10px', display:'inline-block' }}>
        <div className='tarea'>
          <h4>{tarjeta}</h4>
          {
            tareas.map(a => <div className='tareal'>{a}</div>)
          }
          {
            this.state.add ?
              <div>
                <form>
                  <FormGroup controlId="formControlsTextarea">
                    <FormControl componentClass="textarea" placeholder="textarea" />
                  </FormGroup>
                </form>
                <div>
                  <Button onClick={change} >Add</Button>
                  or <span className='cancel' onClick={change}>cancel</span>
                </div>
              </div>
              :
              <div className='addNew' onClick={change}>
                Add a New Card...
              </div>
          }

        </div>
      </div>
    );
  }
}

const BoardDetail = ({ board }) => {
  return (
    <Grid>
      <h3>
        {board.name}
      </h3>
      <div className='canvas'>
        <div style={{ overflowX: 'auto' }}>
          {
            Object.keys(board.tarjetas).map(item => {
              const value = board.tarjetas[item];
              return (
                <Tarjeta tarjeta={item} tareas={value} />
              );
            })
          }
        </div>
      </div>
    </Grid>
  );
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
