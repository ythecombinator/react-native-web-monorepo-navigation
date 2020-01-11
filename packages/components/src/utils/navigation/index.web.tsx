import { useHistory, useLocation, useParams } from 'react-router-dom'

import { Route } from '../../models/router'

const useNavigation = () => {
  const history = useHistory();

  return {
    navigate: history.push
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
