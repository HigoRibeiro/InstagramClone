import { StackNavigator } from 'react-navigation';

import HomePage from './pages/Home';

const Routes = StackNavigator({
  Home: { screen: HomePage },
});

export default Routes;