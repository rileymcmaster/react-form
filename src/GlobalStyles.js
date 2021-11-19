import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
      --primary-color: #3B3B3B;
      --secondary-color: #FFFFFF;
      --third-color: #E8CB32;
      --error-color: #DB2B38;
      --bg-color: #72C75E;
      --content-width: 1000px;
      
    }

    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Alata', sans-serif;
        
    }
    
    html, body, div,
    input, button, select, option,
    h1, h2, h3, h4, h5, h6, p,
    text {
    }
    
    html {
        font-size: 20px;
    scroll-behavior: smooth;
    }
    @media (max-width: 900px) {
    html { font-size: 15px; }
    }
    @media (max-width: 400px) {
    html { font-size: 12px; }
    }
    html, body {
        min-height: 100%;
        height: 100%;
    }
    body {
        }

    h1, p, button {
        user-select: none;
    }

        h2{
    }

    p, a {
    }


    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {

/* 
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        /* list-style: none; */
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
 
`;
