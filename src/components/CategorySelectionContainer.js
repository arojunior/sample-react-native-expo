import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { withNavigation } from 'react-navigation';
import CategorySelectionComponent from './CategorySelectionComponent';
import { getCategories, changeCategory } from '../services/categoriesService';

const onPress = ({ navigation }) => categoryId => {
  changeCategory({
    transactionId: navigation.state.params.transactionId,
    categoryId
  });
};

export default compose(
  withNavigation,
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
