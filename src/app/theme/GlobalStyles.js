import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background: #141414;
    color: #f5f5f1;
    font-size: 16px;
  }

  h1 {
    font-size: 5rem;
    margin: rem 0;
  }

  h2 {
    font-size: 3rem;
    margin: 4rem 0;
  }

  a {
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
  }

  input {
    background-color: ${(props) => props.theme.colors.lightBlack};
    border: none;
    padding: 1rem;
    margin: 1rem;
    width: 100%;
    max-width: 400px;
  }
`;

export default GlobalStyles;
