import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { Title, SubTitle } from './ui/Text';
import { Description, Value } from './ui/Transaction';
import { Container, Item, SubItem, ItemSeparator } from './ui/List';
import { toMoney } from '../services/common/utils';

const TransactionsComponent = ({ transactions }) => (
  <Container>
    <FlatList
      data={transactions}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={() => <ItemSeparator />}
      renderItem={({ item: { merchant, amount } }) => (
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
      )}
    />
  </Container>
);

TransactionsComponent.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default TransactionsComponent;
