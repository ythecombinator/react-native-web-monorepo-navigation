import { FunctionComponent } from 'react'

import { RouteConfig } from '../../models/router'

interface RouteConfigsMap {
  about: {
    _navigator: RouteConfig;
    _root: RouteConfig;
  };
  features: {
    _navigator: RouteConfig;
    codeSharing: RouteConfig;
    webSupport: RouteConfig;
  };
}

const routesMap: RouteConfigsMap;

export { routesMap };
