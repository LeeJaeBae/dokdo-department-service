import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset} // reset css

    // web max-width: 1440px

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 16px;
        color: #333;
    }
`;

export default GlobalStyles;