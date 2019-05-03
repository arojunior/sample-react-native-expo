import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { withNavigation } from 'react-navigation';
import TransactionsComponent from './TransactionsComponent';
import { getTransactions } from '../services/transactionsService';

const onPress = ({ navigation }) => id => {
  navigation.navigate(`Details`, {
    id
  });
};

export default compose(
  withNavigation,
  withState(`transactions`, `setTransactions`, []),
  withHandlers({
    onPress
  }),
  lifecycle({
    componentDidMount() {
      const { setTransactions } = this.props;
      getTransactions().then(data => {
        setTransactions(data);
      });
    }
  })
)(TransactionsComponent);
