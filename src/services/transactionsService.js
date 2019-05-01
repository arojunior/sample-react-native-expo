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
