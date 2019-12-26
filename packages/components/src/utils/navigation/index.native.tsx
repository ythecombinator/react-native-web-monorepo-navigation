import {
  useNavigation as useNativeNavigation,
  useRoute as useNativeRoute,
} from '@react-navigation/core'

import { Route } from '../../models/router'

const useNavigation = () => {
  const { navigate } = useNativeNavigation()

  return {
    navigate,
  }
}

const useRoute = () => {
  const { key, name } = useNativeRoute()

  const route: Route = {
    path: name,
  }

  return route
}

export { useNavigation, useRoute }
