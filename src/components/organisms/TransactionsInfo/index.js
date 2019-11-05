import React from 'react';
import styled from 'styled-components';
import TopTransaction from 'components/molecules/TopTransaction';
import ValueSummary from 'components/molecules/ValueSummary';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 80%;
    height: 3px;
    background-color: ${({ theme }) => theme.mainBlue};
  }
`;

const TransactionsInfo = () => (
  <StyledWrapper>
    <TopTransaction />
    <ValueSummary />
  </StyledWrapper>
);

export default TransactionsInfo;
