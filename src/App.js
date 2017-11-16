import React from 'react';
import SignUp from './Componentes/SignUp.js';
//import SignIn from './Componentes/SignIn.js';
import logo from './trello-logo-white.svg';
import { Image } from 'react-bootstrap';
import { Boards, BoardDetail } from './Boards';
import { connect } from 'redux-zero/react';
import './App.css';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';

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


const App = ({ boards }) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Boards array={boards} />} />
          {
            boards.map((item, index) => {
              const path = "/boards/" + (index + 1) + '-' + item.name;
              return <Route path={path} render={() => <BoardDetail board={boards[index]} />}
              />
            })
          }
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
//<NavLink to='#'>Sign in</NavLink>
//<BoardDetail board={data[0]} />
const mapToProps = ({ boards }) => ({ boards });
export default connect(mapToProps)(App);
