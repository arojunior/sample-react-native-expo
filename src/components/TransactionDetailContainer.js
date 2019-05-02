import {
  compose,
  withState,
  lifecycle,
  branch,
  renderComponent
} from 'recompose';
import { ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation';
import TransactionDetailComponent from './TransactionDetailComponent';
import { getTransactionById } from '../services/transactionsService';

export default compose(
  withNavigation,
  withState(`transaction`, `setTransaction`, {}),
  lifecycle({
    componentDidMount() {
      const { setTransaction, navigation } = this.props;
      getTransactionById({
        setTransaction,
        id: navigation.state.params.id
      });
    }
  }),
  branch(
    ({ transaction }) => !transaction.id,
    renderComponent(ActivityIndicator)
  )
)(TransactionDetailComponent);
