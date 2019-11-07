import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Title from 'components/atoms/Title/Title';

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
    width: 100%;
    padding: 10px;
    align-items: center;
    text-align: center;
    margin: 5px;
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

    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

const ValueSummary = ({ state }) => {
  const { transactions, pln } = state;
  let transaction = {};
  if (transactions.length === 0) {
    transaction = { euro: 0 };
  } else {
    transaction = transactions.reduce((prev, current) => {
      return { euro: prev.euro + current.euro };
    });
  }

  return (
    <StyledTransaction data-testid="value-1">
      <Title>Suma transakcji:</Title>
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
