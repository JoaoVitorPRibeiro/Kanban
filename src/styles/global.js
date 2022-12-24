import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #333;
    background-color: #e5e0dd;
    -webkit-font-smoothing: antialiased;
  }

  ul {
    list-style: none;
  }
`;
