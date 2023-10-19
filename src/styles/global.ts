import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #27272A;
        --white: #FFFFFF;
        --Dark-400: #27272A;   
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--background);
    }
    
`;
