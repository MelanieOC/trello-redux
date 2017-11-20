import React from 'react';
import SignUp from './Componentes/SignUp.js';
import SignIn from './Componentes/SignIn.js';
import { Boards, BoardDetail } from './Boards';
import { connect } from 'redux-zero/react';
import './App.css';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';


const App = ({ boards, user }) => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/signin' render={() => <SignIn user={user} />} />
          <Route path='/signup' render={() => <SignUp user={user} />} />
          <Route exact path="/boards" render={() => <Boards array={boards} />} />
          {
            boards && boards.map((item, index) => {
              const path = "/boards/" + (index + 1) + '-' + item.name;
              return <Route path={path} render={() => <BoardDetail board={boards[index]} />}
              />
            })
          }
          <Route render={() => <Redirect to={user ? "/boards" : "/signin"} />} />
        </Switch>

      </div>
    </BrowserRouter>
  )
}
//<NavLink to='#'>Sign in</NavLink>
//<BoardDetail board={data[0]} />

const mapToProps = ({ boards, user }) => ({ boards, user });
export default connect(mapToProps)(App);
