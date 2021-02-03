import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    html{
        box-sizing: border-box;
    }
    *,*::before,*::after{
        box-sizing: inherit;
    }
    body{
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
`
