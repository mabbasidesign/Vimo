import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './component/home';
import Layout from './hoc/layout';
import RegisterLogin from './component/Register_login/index';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/register_login'exact component={RegisterLogin}/>
        <Route path='/'exact component={Home}/>
      </Switch>
    </Layout>
  )
}

export default Routes;
