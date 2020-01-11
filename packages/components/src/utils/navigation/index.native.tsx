import {
  useNavigation as useNativeNavigation,
  useRoute as useNativeRoute,
} from '@react-navigation/core'

import { NavigationParams, Route } from '../../models/router'

const useNavigation = () => {
  const { navigate } = useNativeNavigation();

  return {
    navigate
  };
};

const useRoute = () => {
  const { name, params } = useNativeRoute();

  const route: Route = {
    path: name,
    params: params as NavigationParams<any>
  };

  return route;
};

export { useNavigation, useRoute };
