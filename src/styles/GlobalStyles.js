import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        overflow-wrap: break-word;
        scrollbar-width: thin;
        scrollbar-color: #08b9ef #06344b;
    }

    *::-webkit-scrollbar {
        width: 0.4rem;
    }

    *::-webkit-scrollbar-track {
        background: #06344b;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #08b9ef;
    }

    textarea::-webkit-scrollbar-thumb {
        background-color: #08b9ef;
    }

    body{
        width: 100vw;
        min-height: 100vh;
        /* height: 100vh; */
        overflow-x: hidden;
    }

    #root {
        width: 100%;
        /* height: 100%; */
    }

    .active {
	color: #f0faff;
    text-decoration: underline;
    text-underline-offset: 0.5rem;
        &:hover{
            color: #f0faff; 
        }
    }
`;

export default GlobalStyle;
