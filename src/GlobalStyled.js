import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
 
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
    }
    a{
      text-decoration: none;
      color: #000;
     -webkit-text-stroke: 0.3px yellow;
    }
`;
// => 전체 영역에서 사용할 수 있는 스타일 처리법
