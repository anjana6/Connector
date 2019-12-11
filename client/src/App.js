import React, { Fragment } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';

import Navbar from './component/layout/Navbar';
import Landing from './component/layout/Landing';
import Login from './component/auth/Login';
import Register from './component/auth/Register';

const App = () => 
  <Router>
     <Fragment>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Landing}/>
      <Route  path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
      </Switch>
    </Fragment>
  </Router>
   
 

export default App;
