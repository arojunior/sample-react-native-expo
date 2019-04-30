import React, { Component } from 'react';
import SafeAreaView from './src/components/ui/SafeArea';
import TransactionsContainer from './src/components/TransactionsContainer';
export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <TransactionsContainer />
      </SafeAreaView>
    );
  }
}
