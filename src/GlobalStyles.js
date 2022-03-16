import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    display: grid;
    grid-template-rows: 48px auto 48px;
    height: 100vh;
    margin: 12px;
    font-family: sans-serif;
    font-size: 112.5%;
    background-color: azure;
  }

  input, label, button, textarea {
    font-size: 1em;
  }

`;
