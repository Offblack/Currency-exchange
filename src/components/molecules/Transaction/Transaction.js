import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';
import Title from 'components/atoms/Title/Title';

const StyledTransaction = styled.li`
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
  margin: 20px;
  padding: 0;
  width: 350px;
  box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.3);
  animation: appear 0.8s ease-in-out;

  @media (max-width: 768px) {
    width: 90%;
    margin: 20px 0;
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0;
  padding: 0 10px;
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

const Transaction = ({ id, title, euro, pln, removeItem }) => (
  <StyledTransaction>
    <StyledWrapper id={id} data-testid="transaction-1">
      <StyledTop>
        <Title>{title}</Title>
        <StyledCurrency>
          <p>€ {euro}</p>
          <p>PLN {pln}</p>
        </StyledCurrency>
      </StyledTop>
      <Button small onClick={() => removeItem(id)}>
        Usuń
      </Button>
    </StyledWrapper>
  </StyledTransaction>
);

Transaction.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  euro: PropTypes.number.isRequired,
  pln: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItemAction(id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Transaction);
