import React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../../containers/Home';

class Router extends PureComponent {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/tokigames-test" component={Home} />
            </Switch>
        </BrowserRouter>
  )}
}

export default Router;
