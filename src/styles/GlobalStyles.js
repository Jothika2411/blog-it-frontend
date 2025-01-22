import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f4f4f9;
    color: #333;
  }

  input, button, textarea {
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
