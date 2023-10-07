import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  body {
    font-family: "Inter", Helvetica, Sans-Serif;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  button {
    cursor: pointer;
  }
`;
export default GlobalStyle;
