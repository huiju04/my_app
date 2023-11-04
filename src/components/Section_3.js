import styled from "styled-components";
import { data } from "../api";

console.log(data);

export const Section_3 = () => {
  const Section_3 = styled.section`
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
    <Section_3>
      <Container $url={data[8].img}>
        <p>천상천하 유아독존</p>
      </Container>
    </Section_3>
  );
};
