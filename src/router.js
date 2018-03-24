import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Register from './containers/register'
import Login from './containers/login'
import Bossinfo from './containers/bossinfo'
import Geniusinfo from './containers/geniusinfo'
import DashBoard from './containers/dashboard'
import Chat from './containers/chat'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login}/>
        <Route path="/bossinfo" component={Bossinfo}/>
        <Route path="/geniusinfo" component={Geniusinfo}/>
        <Route path="/chat" component={Chat}/>
        <Route component={DashBoard} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
