import React from 'react'

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { About as AboutScreen } from '../screens/About'
import { CodeSharing as CodeSharingScreen } from '../screens/CodeSharing'
import { WebSupport as WebSupportScreen } from '../screens/WebSupport'
import { routes } from '../utils/router'

// Screens
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* About routes */}
        <Route exact path={routes.about._root.path}>
          <AboutScreen />
        </Route>
        {/* Feature routes */}
        <Route exact path={routes.features.codeSharing.path}>
          <CodeSharingScreen />
        </Route>
        <Route exact path={routes.features.webSupport.path}>
          <WebSupportScreen />
        </Route>
        {/* Default route */}
        <Route path="*">
          <Redirect to={routes.features.codeSharing.path} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export { Router };
