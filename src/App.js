import React from 'react';
import SignUp from './Componentes/SignUp.js';
import SignIn from './Componentes/SignIn.js';
import { Boards, BoardDetail } from './Boards';
import { connect } from 'redux-zero/react';
import './App.css';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';


const App = ({ boards }) => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route exact path="/boards" render={() => <Boards array={boards} />} />
          {
            boards && boards.map((item, index) => {
              const path = "/boards/" + (index + 1) + '-' + item.name;
              return <Route path={path} render={() => <BoardDetail board={boards[index]} />}
              />
            })
          }
          <Route render={() => <Redirect to="/signin" />} />
        </Switch>

      </div>
    </BrowserRouter>
  )
}
//<NavLink to='#'>Sign in</NavLink>
//<BoardDetail board={data[0]} />

const mapToProps = ({ boards }) => ({ boards });
export default connect(mapToProps)(App);
