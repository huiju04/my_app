import styled from "styled-components";
import { data } from "../api";

console.log(data);

export const Section_2 = () => {
  const Section_2 = styled.section`
    width: 100%;
    height: 100vh;
    border: 1px solid black;
  `;
  const Container = styled.section`
    width: 100%;
    height: 500px;
    background: url(${(props) => props.$url}) no-repeat center / cover;
    p {
      line-height: 500px;
      font-size: 70px;
      font-weight: 900;
      text-align: center;
      color: #000;
      -webkit-text-stroke: 0.3px yellow;
    }
  `;

  return (
    <Section_2>
      <Container $url={data[7].img}>
        <p>초코에몽</p>
      </Container>
    </Section_2>
  );
};
