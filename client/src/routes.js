import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './component/home';
import Layout from './hoc/layout';
import RegisterLogin from './component/Register_login/index';
import Register from './component/Register_login/Register';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/register' exact component={Register}/>
        <Route path='/register_login'exact component={RegisterLogin}/>
        <Route path='/'exact component={Home}/>
      </Switch>
    </Layout>
  )
}

export default Routes;
