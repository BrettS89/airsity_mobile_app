import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function to(routeName, params = {}, title) {
  if (title) {
    params.title = title;
  }
  if (_navigator) {
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      }),
    );
  }
}

function back() {
  _navigator.dispatch(
    NavigationActions.back(),
  );
}

export default {
  back,
  to,
  setTopLevelNavigator,
};
