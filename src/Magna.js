import React from 'react';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import HomePage from './Pages/HomePage';
import { Link, Switch, Route} from 'react-router-dom';

function Magna() {
  return (
    <>
    {/* <Link to="/login">Login</Link>
    <Link to="/signup">Signup</Link> */}
  <Switch>
    <Route  exact path="/">
      <HomePage/>
    </Route>

    <Route path="/login">
      <LoginPage/>
    </Route>

    <Route path="/signup">
      <SignUpPage/>
    </Route>
  </Switch>
    
    </>
  );
}


export default Magna;
