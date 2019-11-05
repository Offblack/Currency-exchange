import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Transaction from 'components/molecules/Transaction';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const StyledList = styled.ul`
  max-width: 1100px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const TransactionsList = ({ state }) => {
  const { transactions, pln } = state;
  return (
    <StyledWrapper>
      <h1>Historia transakcji</h1>
      <StyledList>
        {transactions.map(transaction => (
          <Transaction
            id={transaction.id}
            title={transaction.title}
            euro={transaction.euro}
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
