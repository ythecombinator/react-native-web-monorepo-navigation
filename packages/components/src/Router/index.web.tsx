import React from 'react'

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { About as AboutScreen } from '../screens/About'
import { CodeSharing as CodeSharingScreen } from '../screens/CodeSharing'
import { WebSupport as WebSupportScreen } from '../screens/WebSupport'
import { routesMap } from '../utils/router'

// Screens
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* About routes */}
        <Route exact path={routesMap.about._root.path}>
          <AboutScreen />
        </Route>
        {/* Feature routes */}
        <Route exact path={routesMap.features.codeSharing.path}>
          <CodeSharingScreen />
        </Route>
        <Route exact path={routesMap.features.webSupport.path}>
          <WebSupportScreen />
        </Route>
        {/* Default route */}
        <Route path="*">
          <Redirect to={routesMap.features.codeSharing.path} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export { Router };
