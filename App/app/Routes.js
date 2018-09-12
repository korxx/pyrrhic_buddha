/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import WelcomePage from './containers/WelcomePage';
import OverviewPage from './containers/OverviewPage';
import ContentPage from './containers/ContentPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.CONTENT} component={ContentPage} />
      <Route path={routes.OVERVIEW} component={OverviewPage} />
      <Route path={routes.WELCOME} component={WelcomePage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
