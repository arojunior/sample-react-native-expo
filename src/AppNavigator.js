import { createStackNavigator, createAppContainer } from 'react-navigation';
import TransationsContainer from './components/TransactionsContainer';
import TransationDetailsContainer from './components/TransactionDetailContainer';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: TransationsContainer,
      navigationOptions: {
        headerTitle: 'Transactions'
      }
    },
    Details: {
      screen: TransationDetailsContainer,
      navigationOptions: {
        headerTitle: 'Details'
      }
    }
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);
