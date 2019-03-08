import { NavigationActions, createStackNavigator } from 'react-navigation';

const navigateOnce = getStateForAction => (action, state) => {
  const { type, routeName } = action;
  return state
    && type === NavigationActions.NAVIGATE
    && routeName === state.routes[state.routes.length - 1].routeName
    ? null
    : getStateForAction(action, state);
};

function BugFreeStackNavigator() {
  const navigator = createStackNavigator(...arguments);
  navigator.router.getStateForAction = navigateOnce(navigator.router.getStateForAction);
  return navigator;
}

module.exports = BugFreeStackNavigator;
