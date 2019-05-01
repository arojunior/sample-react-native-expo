import { compose, withState, lifecycle } from 'recompose';
import CategoriesComponent from './CategoriesComponent';
import { getCategories } from '../services/categoriesService';

export default compose(
  withState(`categories`, `setCategories`, []),
  lifecycle({
    componentDidMount() {
      const { setCategories } = this.props;
      getCategories(setCategories);
    }
  })
)(CategoriesComponent);
