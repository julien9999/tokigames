import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../../containers/Home';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
  }
