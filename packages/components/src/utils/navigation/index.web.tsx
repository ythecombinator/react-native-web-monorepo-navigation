import { useHistory, useLocation, useParams } from 'react-router-dom'

import { Route } from '../../models/router'

const useNavigation = () => {
  const { push, goBack } = useHistory();

  return {
    navigate: push,
    goBack
  };
};

const useRoute = () => {
  const { pathname } = useLocation();
  const params = useParams();

  const route: Route = {
    path: pathname,
    params
  };

  return route;
};

export { useNavigation, useRoute };
