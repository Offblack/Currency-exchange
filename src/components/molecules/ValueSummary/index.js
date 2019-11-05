import React from 'react';
import styled from 'styled-components';
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
  align-items: flex-end;
  font-size: ${({ theme }) => theme.fontSize.xs};

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const StyledCurrency = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;

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

  @media (max-width: 468px) {
    font-size: 18px;
  }
`;

const ValueSummary = ({ state }) => {
  const { transactions, pln } = state;
  const transaction = transactions.reduce((prev, current) => {
    return { euro: prev.euro + current.euro };
  });

  return (
    <StyledTransaction>
      <StyledTitle>Suma transakcji:</StyledTitle>
      <StyledCurrency>
        <p>€ {transaction.euro}</p>
        <p>PLN {Math.round(transaction.euro * pln * 100) / 100}</p>
      </StyledCurrency>
    </StyledTransaction>
  );
};

ValueSummary.propTypes = {
  state: PropTypes.shape({
    pln: PropTypes.number,
    transactions: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(ValueSummary);
