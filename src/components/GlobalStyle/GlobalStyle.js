import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-family: "lmroman12","Latin Modern Roman 12 Regular";
        //background: #FFFEF9;
        background: white;
        color: rgba(0,0,0,0.8);
    }

    * {
       box-sizing: border-box !important;
       -webkit-font-smoothing: antialiased; 
    }

    em {
        font-family: "lmromanunsl10";
        font-style: normal;
    }

    html {
        color: rgb(51,51,51);
        font-size:120%;
        line-height: 1.4;

        @media screen and (min-width:1025px) {
            font-size: 187.5%;
        }
    }

    ::selection {
        background:rgba(0,0,0,0.05);
    }

    h1,h2,h3,h4,h5,h6 {
        margin: 0;
        padding: 0;
        font-size: 1rem;
        line-height: inherit;
        font-weight: normal;
    }

    a { 
        color: rgba(0,0,0,0.8);
        text-decoration: none;
        &:hover {
            color: rgba(0,0,0,1);
        }
    }


`;

export default GlobalStyle;
