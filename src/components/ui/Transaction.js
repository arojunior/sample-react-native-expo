import styled from 'styled-components';

export const Item = styled.View`
  padding: 14px 16px 16px 14px;
  flex-direction: row;
`;
export const ItemSeparator = styled.View`
  background-color: #9fa2a6;
  opacity: 0.2;
  width: 100%;
  height: 0.8;
`;

export const Description = styled.View`
  flex: 0.8;
`;

export const Category = styled.View`
  margin-top: 8px;
`;

export const Value = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: flex-end;
`;

export const Container = styled.ScrollView``;
