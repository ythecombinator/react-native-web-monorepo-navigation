import { useHistory, useLocation } from 'react-router-dom'

import { Route } from '../../models/router'

const useNavigation = () => {
  const history = useHistory()

  return {
    navigate: history.push,
  }
}

const useRoute = () => {
  const { pathname } = useLocation()

  const route: Route = {
    path: pathname,
  }

  return route
}

export { useNavigation, useRoute }
