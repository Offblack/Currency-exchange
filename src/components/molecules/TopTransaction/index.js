import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const StyledTransaction = styled.div`
  @keyframes appear {
    0% {
      opacity: 0;
      top: 35px;
    }
    100% {
      opacity: 1;
      top: 0;
    }
  }

  position: relative;
  margin: 30px;
  padding: 25px 0;
  animation: appear 0.8s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xs};

  @media (max-width: 768px) {
    width: 100%;
    margin: 25px 0 0 0;
    padding: 25px 10px 5px 10px;
  }
`;

const StyledTop = styled.div`
  width: 100%;
  display: flex;
  padding-top: 20px;
  justify-content: space-between;
`;

const StyledCurrency = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  p {
    padding: 0;
    margin: 0;
    text-align: right;
  }
`;

const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 0;
  margin: 0;
  text-align: center;

  @media (max-width: 468px) {
    font-size: 18px;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
      color: ${({ theme }) => theme.mainBlue};
      font-weight: 500;
    `}
`;

const TopTransaction = ({ state }) => {
  const { transactions, pln } = state;
  const transaction = transactions.reduce((prev, current) => {
    return prev.euro > current.euro ? prev : current;
  });

  return (
    <StyledTransaction>
      <StyledTitle>Najwyższa transakcja:</StyledTitle>
      <StyledTop>
        <StyledTitle secondary>{transaction.title}</StyledTitle>
        <StyledCurrency>
          <p>€ {transaction.euro}</p>
          <p>PLN {Math.round(transaction.euro * pln * 100) / 100}</p>
        </StyledCurrency>
      </StyledTop>
    </StyledTransaction>
  );
};

TopTransaction.propTypes = {
  state: PropTypes.shape({
    pln: PropTypes.number,
    transactions: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(TopTransaction);
