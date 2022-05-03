import { createGlobalStyle } from "styled-components";

import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html {
        font-weight: 500; 
        font-style: normal;
        font-size: 16px;
        color:#222;
        @media (max-width: 1025px){
            font-size:16px;
        }
        @media (max-width:769px){
            font-size:14px
        }
        @media (max-width:426px){
            font-size:12px
        }
    }
    html,body,#root {
        width : 100%;
        height : 100%;        
        /* @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Gowun+Dodum&display=swap'); */
        font-family: 'Black Han Sans', sans-serif;
        font-family: 'Gowun Dodum', sans-serif;
    }
`;

export default GlobalStyles;
