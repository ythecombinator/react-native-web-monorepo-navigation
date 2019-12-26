export interface Route {
  path: string
}

export interface RouteConfig extends Pick<Route, 'path'> {
  name: string
}

export interface NavigationParams<T> {
  [id: string]: T
}

export type Navigate = <T>(key: string, params?: NavigationParams<T>) => {}
