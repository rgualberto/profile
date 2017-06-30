import React from 'react';
import {render} from 'react-dom';
import store from './redux/store';
import {Provider} from 'react-redux';

import Profiles from './containers/profiles/Profiles.jsx';

render(
  <Provider store={store}>
    <Profiles />
  </Provider>, document.getElementById('app')
);
