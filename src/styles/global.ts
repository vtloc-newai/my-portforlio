import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --w_light: 300;
    --w_regular: 400;
    --w_medium: 500;
    --w_semi: 600;
    --w_bold: 700;
    --white: #FFFFFF;
    --black: #212121;
    --green: #2BC155;
    --font-base: 1rem;
  }

  * {
    font-family: 'Quicksand', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color: var(--white);
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  p {
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`