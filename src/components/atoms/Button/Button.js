import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Lato', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding: 18px 40px;
  margin: 20px 0;
  color: #fff;
  background-color: ${({ theme }) => theme.mainBlue};
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  border-radius: 50px;
  outline: 0;
  cursor: pointer;
  transition: background 0.4s ease-in-out;
  font-weight: 700;

  :hover {
    background-color: ${({ theme }) => theme.lightBlue};
  }

  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xxs};
    `}
`;

export default Button;
