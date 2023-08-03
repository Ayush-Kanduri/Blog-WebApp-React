import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        overflow-wrap: break-word;
    }
    body{
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;
    }
    #root {
        width: 100%;
        height: 100%;
    }
`;

export default GlobalStyle;