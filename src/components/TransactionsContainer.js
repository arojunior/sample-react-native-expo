import { compose, withState, lifecycle } from 'recompose';
import Client from '../lib/index';
import logger from '../services/logger';
import TransationsComponent from './TransactionsComponent';

export default compose(
  withState(`transactions`, `setTransactions`, []),
  lifecycle({
    componentDidMount() {
      const { setTransactions } = this.props;
      const mock = new Client();
      mock
        .fetchTransactions()
        .then(data => {
          setTransactions(data);
        })
        .catch(err => {
          logger.error(err);
        });
    }
  })
)(TransationsComponent);
