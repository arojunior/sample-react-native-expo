import Client from '../lib/index';
import logger from './common/logger';

export const getTransactions = () => {
  const mock = new Client();
  return mock.fetchTransactions().catch(err => {
    logger.error(err);
  });
};

export const getTransactionById = id => {
  const mock = new Client();
  return mock.fetchTransaction(id).catch(err => {
    logger.error(err);
  });
};
