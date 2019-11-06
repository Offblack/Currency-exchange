import styled, { css } from 'styled-components';

const Title = styled.h2`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 0;
  margin: 0;
  text-align: center;

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
      color: ${({ theme }) => theme.mainBlue};
      font-weight: 500;
    `}

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export default Title;
