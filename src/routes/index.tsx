import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Stocks from '../pages/Stocks';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />

    <Route path="/login" component={LogIn} />
    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/register" component={Register} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route path="/stocks" component={Stocks} />
  </Switch>
);

export default Routes;
