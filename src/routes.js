import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Place from '~/pages/Place';

const Routes = createAppContainer(
  createStackNavigator(
    { Main, Place }, {
      headerMode: 'none'
    }
  )
);

export default Routes;
