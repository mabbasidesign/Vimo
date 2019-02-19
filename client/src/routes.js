import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Auth from './hoc/auth';

import Home from './component/home';
import RegisterLogin from './component/Register_login/index';
import ProductPage from './component/Product/Index';
import Register from './component/Register_login/Register';
import userDashboard from './component/user/index';
import Shop from './component/shop/index';
import AddProduct from './component/user/Admin/add_products';
import ManageCategories from './component/user/Admin/manage_categories';
import UserCart from './component/user/cart'

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/user/dashboard' exact component={Auth(userDashboard, true)}/>
        <Route path='/admin/add_products' exact component={Auth(AddProduct, true)}/>
        <Route path='/admin/manage_categories' exact component={Auth(ManageCategories, true)}/>

        <Route path='/register' exact component={Auth(Register, false)}/>
        <Route path='/product_detail/:id' exact component={Auth(ProductPage, null)}/>
        <Route path='/register_login'exact component={Auth(RegisterLogin, false)}/>
        <Route path='/shop' exact component={Auth(Shop, null)}/>
        <Route path='/'exact component={Auth(Home, null)}/>
      </Switch>
    </Layout>
  )
}

export default Routes;
