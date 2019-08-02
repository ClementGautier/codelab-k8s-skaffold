import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Version from './components/Version';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/version' component={Version} />
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));
