import { createGlobalStyle } from "styled-components"; 

export const GlobalStyled = createGlobalStyle`
    body,
    html{
        margin:0;
        padding:0;
        background: #14131f;
    }
    *{
        box-sizing:content-box;
        transition: 0.3s ease-in-out;
    }
`