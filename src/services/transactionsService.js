import Client from '../lib/index';
import logger from './common/logger';

export const getTransactions = setTransactions => {
  const mock = new Client();
  mock
    .fetchTransactions()
    .then(data => {
      setTransactions(data);
    })
    .catch(err => {
      logger.error(err);
    });
};

export const getTransactionById = ({ setTransaction, id }) => {
  const mock = new Client();
  mock
    .fetchTransaction(id)
    .then(data => {
      setTransaction(data);
    })
    .catch(err => {
      logger.error(err);
    });
};
