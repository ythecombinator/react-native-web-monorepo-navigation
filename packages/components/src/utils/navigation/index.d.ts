import { Navigate, Route } from '../../models/router'

const useNavigation: () => {
  navigate: Navigate
}

const useRoute: () => Route

export { useNavigation, useRoute }
