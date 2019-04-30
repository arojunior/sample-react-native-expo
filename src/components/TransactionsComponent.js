import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const TransactionsComponent = ({ transactions }) => (
  <View>{console.log(`transactions`, transactions)}</View>
);

TransactionsComponent.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default TransactionsComponent;
