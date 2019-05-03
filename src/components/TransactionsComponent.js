import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, TouchableOpacity } from 'react-native';
import { Title, SubTitle } from './ui/Text';
import { Description, Value } from './ui/Transaction';
import { Container, Item, SubItem, ItemSeparator } from './ui/List';
import { toMoney } from '../services/common/utils';

const TransactionsComponent = ({ transactions, onPress }) => (
  <Container>
    <FlatList
      data={transactions}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={() => <ItemSeparator />}
      renderItem={({ item: { id, merchant, amount } }) => (
        <TouchableOpacity onPress={() => onPress(id)}>
          <Item>
            <Description>
              <Title>{merchant.name}</Title>
              <SubItem>
                <SubTitle>{merchant.merchantCategory.name}</SubTitle>
              </SubItem>
            </Description>
            <Value>
              <Title>{toMoney(amount)}</Title>
            </Value>
          </Item>
        </TouchableOpacity>
      )}
    />
  </Container>
);

TransactionsComponent.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onPress: PropTypes.func.isRequired
};

export default TransactionsComponent;
