import React, { Component } from 'react';
import styled from 'styled-components';
import SafeAreaView from './src/components/ui/SafeArea';
import TransactionDetailContainer from './src/components/TransactionDetailContainer';

const MainView = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <MainView>
          <TransactionDetailContainer />
        </MainView>
      </SafeAreaView>
    );
  }
}
