export interface NavigationParams<T> {
  [id: string]: T;
}

export type Navigate = <T>(key: string, params?: NavigationParams<T>) => {};

export interface Route {
  path: string;
  params?: NavigationParams<any>;
}

export interface RouteConfig extends Pick<Route, "path"> {
  name: string;
}
