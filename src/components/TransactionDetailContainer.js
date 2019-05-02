import {
  compose,
  withState,
  lifecycle,
  branch,
  renderComponent
} from 'recompose';
import { ActivityIndicator } from 'react-native';
import TransactionDetailComponent from './TransactionDetailComponent';
import { getTransactionById } from '../services/transactionsService';

export default compose(
  withState(`transaction`, `setTransaction`, {}),
  lifecycle({
    componentDidMount() {
      const { setTransaction } = this.props;
      getTransactionById({
        setTransaction,
        id: 'ffb73532-f245-4ac7-8f5b-7726ace56c4a'
      });
    }
  }),
  branch(
    ({ transaction }) => !transaction.id,
    renderComponent(ActivityIndicator)
  )
)(TransactionDetailComponent);
