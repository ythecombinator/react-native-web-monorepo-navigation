import {
  useNavigation as useNativeNavigation,
  useRoute as useNativeRoute,
} from '@react-navigation/native'

import { NavigationParams, Route } from '../../models/router'

const useNavigation = () => {
  const { navigate, replace, goBack } = useNativeNavigation()

  return {
    navigate,
    replace,
    goBack,
  }
}

const useRoute = () => {
  const { name, params } = useNativeRoute()

  const route: Route = {
    path: name,
    params: params as NavigationParams<any>,
  }

  return route
}

export { useNavigation, useRoute }
