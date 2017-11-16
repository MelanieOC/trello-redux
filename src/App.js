import React from 'react';
import SignUp from './Componentes/SignUp.js';
import SignIn from './Componentes/SignIn.js';
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
        <NavLink to='/boards'>
          <i class="fa fa-columns" aria-hidden="true"></i>
          <span> Boards</span>
        </NavLink>
      </span>
      <Image src={logo} width='200px' />
      <span>
        <NavLink href='#'>
          <span> User</span>
        </NavLink>
        <NavLink to='/signin'>
          <i class="fa fa-sign-out" aria-hidden="true"></i>
          <span> Sign Out</span>
        </NavLink>
      </span>
    </header>
  );
}


const App = ({ boards }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signup' component={SignUp}/>
        <Route path='/signin' component={SignIn}/>
        <Route path="/boards" render={() => (
          <div>
            <Header />
            <Boards array={boards} />
          </div>
        )} />
        {
          boards.map((item, index) => {
            const path = "/boards/" + (index + 1) + '-' + item.name;
            return <Route path={path} render={() => (
              <div>
                <Header />
                <BoardDetail board={boards[index]} />
              </div>
            )}
            />
          })
        }
        <Route render={() => <Redirect to="/signin" />} />
      </Switch>
    </BrowserRouter>
  )
}
//<NavLink to='#'>Sign in</NavLink>
//<BoardDetail board={data[0]} />
const mapToProps = ({ boards }) => ({ boards });
export default connect(mapToProps)(App);
