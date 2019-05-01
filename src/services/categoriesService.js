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
