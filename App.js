import React, { Component } from 'react';
import styled from 'styled-components';
import SafeAreaView from './src/components/ui/SafeArea';
import AppNavigator from './src/AppNavigator';

const MainView = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <MainView>
          <AppNavigator />
        </MainView>
      </SafeAreaView>
    );
  }
}
