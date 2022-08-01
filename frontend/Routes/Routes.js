import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from '../src/pages/Home';
import Login from '../src/components/Login';
import Signup from '../src/components/Signup';

function Routes() {
    return (
<Switch>
<Route exact path="/">
    <Home />
</Route>
<Route path="/login">
    <Login />
</Route>
<Route path="/signup">
    <Signup />
</Route>
</Switch>
    );
}

export default Routes;