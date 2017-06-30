import React from 'react';
import {render} from 'react-dom';
import store, {history} from './redux/store';
import {Provider} from 'react-redux';
import {Route} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';

import Profiles from './containers/profiles/Profiles.jsx';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact={true} path="/" component={Profiles}/>
      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('app')
);
