import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Transaction from 'components/molecules/Transaction/Transaction';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  width: 60%;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const StyledList = styled.ul`
  width: 100%;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;

  @media (max-width: 768px) {
    fllex-direction: column;
    align-items: center;
    margin: 0;
  }
`;

const TransactionsList = ({ state }) => {
  const { transactions, pln } = state;
  return (
    <StyledWrapper data-testid="list-1">
      <h1>Historia transakcji</h1>
      <StyledList>
        {transactions.map(transaction => (
          <Transaction
            id={transaction.id}
            title={transaction.title}
            euro={Math.round(transaction.euro * 100) / 100}
            pln={Math.round(transaction.euro * pln * 100) / 100}
            key={transaction.id}
          />
        ))}
      </StyledList>
    </StyledWrapper>
  );
};

TransactionsList.propTypes = {
  state: PropTypes.shape({
    pln: PropTypes.number,
    transactions: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(TransactionsList);
