import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --maxWidth: 1280px;
    --white: #fff;
    --lightGrey: #eee;
    --mediumGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontHuge: 2.5rem;
    --fontBig: 1.5rem;
    --fontMedium: 1.2rem;
    --fontSmall: 1rem;
    --fontExtraSmall: 0.8rem;
  }

  *{
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }
  body{
    margin: 0;
    padding: 0;
    background: var(--lightGrey);
  }
`;
