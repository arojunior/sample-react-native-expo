import Client from '../lib/index';
import logger from './common/logger';

export const getCategories = () => {
  const mock = new Client();
  return mock.fetchUserCategories().catch(err => {
    logger.error(err);
  });
};

export const changeCategory = ({ transactionId, categoryId }) => {
  const mock = new Client();
  return mock
    .updateTransactionUserCategory(transactionId, categoryId)
    .then(() => {
      logger.info(
        `Updated transaction id ${transactionId} with category ${categoryId}`
      );
    })
    .catch(err => {
      logger.error(err);
    });
};
