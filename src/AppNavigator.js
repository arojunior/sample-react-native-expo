import { createStackNavigator, createAppContainer } from 'react-navigation';
import TransationsContainer from './components/TransactionsContainer';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: TransationsContainer
    }
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);
