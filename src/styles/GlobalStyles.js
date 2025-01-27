import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
    box-sizing: border-box;
    }
    body {
        font-family: Noto Sans, Noto Sans KR;
    }
`;
export default GlobalStyle;