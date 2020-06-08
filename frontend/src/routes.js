import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NovoCaso from './pages/NovoCaso';


function Routes() {
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/casos/new" component={NovoCaso}/>
        </Switch>
    </BrowserRouter>
    );
}

export default Routes;