import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Applist from './containers/Applist';
import Release from './containers/Release';
import Login from './containers/Login';


export default (
  <Route path="/" component={App}>
    <Route path="/home"
           component={Home} />
    <Route path="/applist"
           component={Applist} />
    <Route path='/release'
    		component={Release} />
    <Route path = "/login"
    		component = {Login} />		
  </Route>
);
