import React, { Component } from 'react';
import styled from 'styled-components';
import SafeAreaView from './src/components/ui/SafeArea';
import CategorySelectionContainer from './src/components/CategorySelectionContainer';

const MainView = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <MainView>
          <CategorySelectionContainer />
        </MainView>
      </SafeAreaView>
    );
  }
}
