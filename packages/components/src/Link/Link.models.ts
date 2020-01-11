import { ReactChild } from 'react'

import { Route } from '../models/router'

export interface LinkProps {
  children?: ReactChild;
  path: Route["path"];
  params?: Route["params"];
}
