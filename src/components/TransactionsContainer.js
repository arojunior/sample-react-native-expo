import { compose, withState, lifecycle } from 'recompose';
import TransationsComponent from './TransactionsComponent';
import { getTransactions } from '../services/transactionsService';

export default compose(
  withState(`transactions`, `setTransactions`, []),
  lifecycle({
    componentDidMount() {
      const { setTransactions } = this.props;
      getTransactions(setTransactions);
    }
  })
)(TransationsComponent);
