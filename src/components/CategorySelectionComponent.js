import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FlatList, TouchableOpacity } from 'react-native';
import { Container, Item, ItemSeparator } from './ui/List';

const CategoryName = styled.Text`
  font-size: 14px;
`;

const CategorySelectionComponent = ({ categories, onPress }) => (
  <Container>
    <FlatList
      data={categories}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={() => <ItemSeparator />}
      renderItem={({ item: { id, name } }) => (
        <TouchableOpacity onPress={() => onPress(id)}>
          <Item>
            <CategoryName>{name}</CategoryName>
          </Item>
        </TouchableOpacity>
      )}
    />
  </Container>
);

CategorySelectionComponent.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onPress: PropTypes.func.isRequired
};

export default CategorySelectionComponent;
