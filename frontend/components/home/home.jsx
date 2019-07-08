import React from 'react';

import ProductIndexContainer from '../product/product_index_container';
import ProducDetailContainer from '../product/product_detail_container';

import { Route, Switch, Link, Redirect } from 'react-router-dom';


export default () => (
  <div className="">
    <Switch>
      {/* <Route exact path="/product/:productId" component={ProducDetailContainer} /> */}
      {/* <Route exact path="/" component={ProductIndexContainer} /> */}
    </Switch>
  </div>
);