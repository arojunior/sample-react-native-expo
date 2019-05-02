import { createStackNavigator, createAppContainer } from 'react-navigation';
import TransationsContainer from './components/TransactionsContainer';
import TransationDetailsContainer from './components/TransactionDetailContainer';
import CategorySelectionContainer from './components/CategorySelectionContainer';

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
    },
    CategorySelection: {
      screen: CategorySelectionContainer,
      navigationOptions: {
        headerTitle: 'Change Category'
      }
    }
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);
