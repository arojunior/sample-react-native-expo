import Client from '../lib/index';
import logger from './common/logger';

export const getCategories = setCategories => {
  const mock = new Client();
  mock
    .fetchUserCategories()
    .then(data => {
      setCategories(data);
    })
    .catch(err => {
      logger.error(err);
    });
};

export const changeCategory = ({ transactionId, categoryId }) => {
  const mock = new Client();
  mock
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
