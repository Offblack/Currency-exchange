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

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

const StyledCurrency = styled.div`
  display: flex;
  flex-direction: column;

  p {
    padding: 0;
    margin: 0;
    text-align: right;
  }
`;

const TopTransaction = ({ state }) => {
  const { transactions, pln } = state;
  const transaction = transactions.reduce((prev, current) => {
    return prev.euro > current.euro ? prev : current;
  });

  return (
    <StyledTransaction>
      <Title>Najwyższa transakcja:</Title>
      <StyledTop>
        <Title secondary>{transaction.title}</Title>
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
