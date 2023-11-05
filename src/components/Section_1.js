import styled from "styled-components";
import { data } from "../api";

console.log(data);

export const Section_1 = () => {
  const Section_1 = styled.section`
    width: 100%;
    height: 100vh;
  `;
  const Container = styled.section`
    width: 100%;
    height: 500px;
    border: 1px solid black;
    background: url(${(props) => props.$url}) no-repeat center / cover;
    p {
      line-height: 500px;
      font-size: 50px;
      font-weight: 900;
      text-align: center;
      color: #000;
      -webkit-text-stroke: 0.3px yellow;
      margin-top: -350px;
    }
  `;

  const Container_1 = styled.section`
    width: 100%;
    height: 200px;
    background: black;
    margin: 100px 0 0 0;
  `;

  const ImgWrap = styled.div`
    width: 500px;
    height: 500px;
    border: 1px solid black;
    background: url(${(props) => props.$url}) no-repeat center / cover;
    margin: 0 200px;
  `;
  const Title = styled.h1`
    width: 1000px;
    height: 500px;
    margin: 0 500px;
    background-color: #000;
    color: #000;
    -webkit-text-stroke: 0.3px yellow;
    font-weight: 700;
    h2 {
      font-size: 40px;
    }
    p {
      font-size: 28px;
      margin-bottom: 25px;
      color: #fff;
    }
  `;

  const Container_2 = styled.section`
    width: 100%;
    height: 400px;
    background: black;
    margin: 200px 0;
  `;

  return (
    <Section_1>
      <ImgWrap $url={data[9].img}>
        <Title>
          <h2>출생</h2>
          <p>1989년 12월 7일 </p>

          <h2>국적</h2>
          <p> 일본</p>

          <h2>신체</h2>
          <p>190cm 이상, 체중 불명</p>

          <h2>소속</h2>
          <p>
            도쿄 도립 주술 고등전문학교 졸업, 도쿄 도립 주술 고등전문학교 교사
          </p>
        </Title>
      </ImgWrap>

      <Container_1></Container_1>

      <Container $url={data[6].img}>
        <p>참 아이러니하지 않아?</p>
      </Container>

      <Container_2></Container_2>
    </Section_1>
  );
};
