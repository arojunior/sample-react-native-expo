import { compose, withState, withHandlers, lifecycle } from 'recompose';
import CategorySelectionComponent from './CategorySelectionComponent';
import { getCategories } from '../services/categoriesService';
import logger from '../services/common/logger';

const onPress = () => id => {
  logger.info(id);
};

export default compose(
  withState(`categories`, `setCategories`, []),
  withHandlers({
    onPress
  }),
  lifecycle({
    componentDidMount() {
      const { setCategories } = this.props;
      getCategories(setCategories);
    }
  })
)(CategorySelectionComponent);
