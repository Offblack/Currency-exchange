import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`;

const MainTemplate = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

MainTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MainTemplate;
