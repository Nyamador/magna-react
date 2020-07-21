import React from 'react';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import { Link, Switch, Route} from 'react-router-dom';

function Magna() {
  return (
    <>
    <Link to="/login">Login</Link>
    <Link to="/signup">Signup</Link>
  <Switch>
    <Route  exact path="/">
      <Home/>
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


function Home(){
  return(
    <p>Home</p>
  )
}


export default Magna;
