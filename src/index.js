import React from 'react';
import {render} from 'react-dom';
import store, {history} from './redux/store';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';

import Profiles from './containers/profiles/Profiles.jsx';
import Login from './components/user/Login.jsx';
import Logout from './components/user/Logout.jsx';
import NoRoute from './components/no-route/NoRoute.jsx';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact={true} path="/" component={Profiles}/>

          <Route path="/login" component={Login}/>
          <Route path="/logout" component={Logout}/>

          <Route component={NoRoute}/>
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('app')
);
