import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';

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
    width: 90vw;
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
`;

const StyledCurrency = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  p {
    padding: 0;
    margin: 0;
  }
`;

const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 0;
  margin: 10px 0;

  @media (max-width: 468px) {
    font-size: 18px;
  }
`;

const Transaction = ({ id, title, euro, pln, removeItem }) => (
  <StyledTransaction>
    <StyledWrapper id={id}>
      <StyledTop>
        <StyledTitle>{title}</StyledTitle>
        <StyledCurrency>
          <p>€ {euro}</p>
          <p>PLN {pln}</p>
        </StyledCurrency>
      </StyledTop>
      <Button onClick={() => removeItem(id)}>Usuń</Button>
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
