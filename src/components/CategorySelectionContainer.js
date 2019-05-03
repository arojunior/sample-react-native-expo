import {
  compose,
  withState,
  withHandlers,
  withProps,
  lifecycle
} from 'recompose';
import { withNavigation } from 'react-navigation';
import CategorySelectionComponent from './CategorySelectionComponent';
import { getCategories, changeCategory } from '../services/categoriesService';

const onPress = ({ transactionId, setSelectedCategory }) => categoryId => {
  changeCategory({
    transactionId,
    categoryId
  }).then(() => {
    setSelectedCategory(categoryId);
  });
};

export default compose(
  withNavigation,
  withState(`categories`, `setCategories`, []),
  withState(`selectedCategory`, `setSelectedCategory`, ``),
  withProps(({ navigation: { state: { params } } }) => ({
    transactionId: params.transactionId
  })),
  withHandlers({
    onPress
  }),
  lifecycle({
    componentDidMount() {
      const { setCategories } = this.props;
      getCategories().then(data => {
        setCategories(data);
      });
    }
  })
)(CategorySelectionComponent);
