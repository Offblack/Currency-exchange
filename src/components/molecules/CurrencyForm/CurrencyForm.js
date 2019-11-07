import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { Formik } from 'formik';
import arrowsIcon from 'assets/images/arrows.svg';
import europeIcon from 'assets/images/europe.svg';
import polandIcon from 'assets/images/poland.svg';
import { connect } from 'react-redux';
import { changeValue as changeValueAction } from 'actions';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
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
  animation: appear 0.6s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const StyledForm = styled.form`
  padding: 0;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  max-width: 700px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

const StyledFields = styled.div`
  display: flex;
  justify-content: center;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledHeader = styled.h1`
  text-align: center;
  margin: 50px;

  @media (max-width: 768px) {
    margin: 30px 0;
  }
`;

const StyledArrows = styled.img`
  width: 30px;
  height: auto;
  margin: 0 50px;
  opacity: 0.3;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledCurrency = styled.img`
  width: 20px;
  height: auto;
  position: relative;
  left: 90px;
  animation: appear 0.6s ease-in-out;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CurrencyForm = ({ changeValue }) => (
  <StyledWrapper>
    <StyledHeader>Przelicznik walutowy</StyledHeader>
    <Formik
      initialValues={{
        pln: 4.25,
      }}
      onSubmit={(values, actions) => {
        changeValue(values);
        actions.setSubmitting(false);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <StyledForm data-testid="form-1" onSubmit={handleSubmit}>
          <StyledFields>
            <StyledCurrency src={europeIcon} alt="europe-icon" />
            <Input
              type="text"
              name="euro"
              onChange={handleChange}
              onBlur={handleBlur}
              value="1"
              label="EURO"
              required
              disabled
            />
            <StyledArrows src={arrowsIcon} alt="arrows-icon" />
            <StyledCurrency src={polandIcon} alt="poland-icon" />
            <Input
              type="number"
              name="pln"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.pln}
              step="0.01"
              label="PLN"
              secondary
              required
            />
          </StyledFields>
          <Button type="submit" disabled={isSubmitting}>
            Przelicz kurs
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

CurrencyForm.propTypes = {
  changeValue: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeValue: values => dispatch(changeValueAction(values)),
});

export default connect(
  null,
  mapDispatchToProps,
)(CurrencyForm);
