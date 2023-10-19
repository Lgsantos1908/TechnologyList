import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #121212;
        --white: #FFFFFF;
        --Dark-400: #27272A;   
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
`;
