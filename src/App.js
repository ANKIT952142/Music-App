import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'

import Trending from './Trending';

import Home from './Home';
import Newrelease from './Newrelease';
import Detail from './Detail';



export default () => {
  
  
  return (
    <>
      
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/trending">
        <Trending />
      </Route>

      <Route path="/newrelease">
        <Newrelease />
      </Route>

       <Route path="/detail">
        <Detail />
      </Route>
    </Switch>
    
    </>
  );
};