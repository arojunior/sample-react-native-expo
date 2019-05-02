import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title, SubTitle } from './ui/Text';
import { Description, Value } from './ui/Transaction';
import { Item, SubItem, ItemSeparator } from './ui/List';
import { toMoney, toDateTime } from '../services/common/utils';

const Container = styled.View`
  flex: 1;
`;

const DefaultText = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

const HighlightText = styled(DefaultText)`
  color: #e9794b;
`;

const SectionContainer = styled.View`
  margin-bottom: 2px;
  padding-bottom: 16px;
  background-color: #fff;
`;

const SectionTitle = styled.Text`
  color: #000;
  margin-top: 16px;
  margin-left: 14px;
`;

const Row = styled.View`
  height: 15px;
  margin-top: 14px;
  margin-left: 14px;
  margin-right: 14px;
  flex-direction: row;
  justify-content: flex-start;
`;

const ColumnLeft = styled.View`
  flex: 1;
  align-items: flex-start;
`;

const ColumnRight = styled.View`
  flex: 1;
  align-items: flex-end;
`;

const TransactionDetailComponent = ({ transaction }) => {
  const { merchant, amount, purchaseTime } = transaction;
  const { merchantCategory } = merchant;

  return (
    <Container>
      <Item>
        <Description>
          <Title>{merchant.name}</Title>
          <SubItem>
            <SubTitle>{merchantCategory.name}</SubTitle>
          </SubItem>
        </Description>
        <Value>
          <Title>{toMoney(amount)}</Title>
        </Value>
      </Item>
      <ItemSeparator />
      <SectionContainer>
        <SectionTitle>
          <Title>DETAILS</Title>
        </SectionTitle>
        <Row>
          <ColumnLeft>
            <SubTitle>Purchased at</SubTitle>
          </ColumnLeft>
          <ColumnRight>
            <DefaultText>{toDateTime(purchaseTime)}</DefaultText>
          </ColumnRight>
        </Row>
        <Row>
          <ColumnLeft>
            <SubTitle>Merchant name</SubTitle>
          </ColumnLeft>
          <ColumnRight>
            <DefaultText>{merchant.name}</DefaultText>
          </ColumnRight>
        </Row>
        <Row>
          <ColumnLeft>
            <SubTitle>Website</SubTitle>
          </ColumnLeft>
          <ColumnRight>
            <HighlightText>{merchant.website}</HighlightText>
          </ColumnRight>
        </Row>
      </SectionContainer>
      <ItemSeparator />
      <SectionContainer>
        <SectionTitle>
          <Title>ACCOUNTING</Title>
        </SectionTitle>
        <Row>
          <ColumnLeft>
            <SubTitle>QuickBooks Category</SubTitle>
          </ColumnLeft>
          <ColumnRight>
            <HighlightText>Select a category ></HighlightText>
          </ColumnRight>
        </Row>
      </SectionContainer>
    </Container>
  );
};

TransactionDetailComponent.propTypes = {
  transaction: PropTypes.shape({}).isRequired
};

export default TransactionDetailComponent;
