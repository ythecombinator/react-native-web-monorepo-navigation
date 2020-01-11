import { Navigate, Route } from '../../models/router'

const useNavigation: () => {
  navigate: Navigate;
  goBack: () => {};
};

const useRoute: () => Route;

export { useNavigation, useRoute };
