import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './pages/Login/index';
import Main from './pages/Main/index';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Main,
  })
);

export default Routes;
