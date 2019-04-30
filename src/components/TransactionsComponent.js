import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { Title, SubTitle } from './ui/Text';
import {
  Container,
  Item,
  ItemSeparator,
  Category,
  Description,
  Value
} from './ui/Transaction';

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
            <Category>
              <SubTitle>{merchant.merchantCategory.name}</SubTitle>
            </Category>
          </Description>
          <Value>
            <Title>${amount}</Title>
          </Value>
        </Item>
      )}
    />
    {console.log(transactions)}
  </Container>
);

TransactionsComponent.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default TransactionsComponent;
