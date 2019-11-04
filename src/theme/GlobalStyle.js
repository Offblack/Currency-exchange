import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap');

   *, *::before, *::after {
      box-sizing: border-box;
   }

  body {
   font-family: 'Lato', sans-serif;
   margin: 0;
   padding: 0;
  }
`;

export default GlobalStyle;
