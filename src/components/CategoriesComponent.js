import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const CategoriesComponent = ({ categories }) => (
  <View>{console.log(`categories`, categories)}</View>
);

CategoriesComponent.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default CategoriesComponent;
