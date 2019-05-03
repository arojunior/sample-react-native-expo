import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FlatList, TouchableOpacity } from 'react-native';
import { Container, Item, ItemSeparator } from './ui/List';
import Check from '../icons/check.svg';

const CategoryName = styled.Text`
  font-size: 14px;
`;

const CheckWrapper = styled.View`
  align-self: flex-end;
  justify-content: center;
`;

const Row = styled.View`
  flex: 1;
  flex-direction: row;
`;

const ColumnLeft = styled.View`
  flex: 0.8;
`;

const ColumnRight = styled.View`
  flex: 0.2;
`;

const CategorySelectionComponent = ({
  categories,
  selectedCategory,
  onPress
}) => (
  <Container>
    <FlatList
      data={categories}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={() => <ItemSeparator />}
      renderItem={({ item: { id, name } }) => (
        <TouchableOpacity onPress={() => onPress(id)}>
          <Item>
            <Row>
              <ColumnLeft>
                <CategoryName>{name}</CategoryName>
              </ColumnLeft>
              <ColumnRight>
                <CheckWrapper>
                  {selectedCategory === id && <Check />}
                </CheckWrapper>
              </ColumnRight>
            </Row>
          </Item>
        </TouchableOpacity>
      )}
    />
  </Container>
);

CategorySelectionComponent.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onPress: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired
};

export default CategorySelectionComponent;
