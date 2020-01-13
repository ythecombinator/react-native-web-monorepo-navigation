import { useCallback } from 'react'

import { parse } from 'query-string'
import { useHistory, useLocation } from 'react-router-dom'

import { NavigationParams, Route } from '../../models/router'

// Helper functions

const buildUrl = (pathname: string, params: NavigationParams<any>) => {
  const base = window.location.href;
  const url = new URL(pathname, base);

  const searchParams = new URLSearchParams(params);
  url.search = searchParams.toString();
  const newUrl = url.toString();

  const finalUrl = newUrl.replace(url.origin, "");

  return finalUrl;
};

// Hooks

const useNavigation = () => {
  const { push, replace: historyReplace, goBack } = useHistory();

  const navigate = useCallback(
    (to: Route["path"], qsParams: Route["params"] = {}) => {
      const path = buildUrl(to, qsParams);
      push(path);
    },
    []
  );

  const replace = useCallback(
    (to: Route["path"], qsParams: Route["params"] = {}) => {
      const path = buildUrl(to, qsParams);
      historyReplace(path);
    },
    []
  );

  return {
    navigate,
    replace,
    goBack
  };
};

const useRoute = () => {
  const { pathname, search } = useLocation();
  const params = parse(search);

  const route: Route = {
    path: pathname,
    params
  };

  return route;
};

export { useNavigation, useRoute };
