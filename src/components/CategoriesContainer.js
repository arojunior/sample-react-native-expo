import { compose, withState, lifecycle } from 'recompose';
import Client from '../lib/index';
import logger from '../services/logger';
import CategoriesComponent from './CategoriesComponent';

export default compose(
  withState(`categories`, `setCategories`, []),
  lifecycle({
    componentDidMount() {
      const { setCategories } = this.props;
      const mock = new Client();
      mock
        .fetchUserCategories()
        .then(data => {
          setCategories(data);
        })
        .catch(err => {
          logger.error(err);
        });
    }
  })
)(CategoriesComponent);
