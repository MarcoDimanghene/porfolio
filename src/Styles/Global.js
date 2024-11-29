import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
        border: none;
        outline: none;
        scroll-behavior: smooth;
    }

    :root {
        --bg-color: ${(props) => props.theme.backgroundColor};
        --second-bg-color: ${(props) => props.theme.secondBackgroundColor};
        --text-color: ${(props) => props.theme.textColor};
        --main-color: ${(props) => props.theme.mainColor};
    }

    body {
        background-color: var(--bg-color);
        color: var(--text-color);
        transition: background-color 0.3s ease, color 0.3s ease; 
    }
`;
