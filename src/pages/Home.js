import styled from "styled-components";
import { data } from "../api";

console.log(data);

export const Home = () => {
  const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
  `;

  const Section01 = styled.section`
    width: 100%;
    height: 500px;
    border: 1px solid black;
    background: url(${(props) => props.$url}) no-repeat center / cover;
    margin: 0 auto;
    text-align: center;

    p {
      margin-top: 50px;
      color: #fff;
      font-size: 40px;
      font-weight: 700;
      -webkit-text-stroke: 2px black;
    }
  `;

  const Title = styled.h3`
    margin-top: 250px;
    font-size: 60px;
    color: #000;
    -webkit-text-stroke: 0.3px yellow;
  `;

  const Section02 = styled.section`
    width: 100%;
    height: 600px;
    margin: 100px auto 0 auto;
    background-color: black;
    display: flex;
    justify-content: space-between;
  `;

  const Con = styled.div`
    width: 380px;
    height: 400px;
    border: 1px solid black;
    margin: 100px 50px;
    background: url(${(props) => props.$url}) no-repeat center / cover;
    p {
      font-size: 40px;
      font-weight: 900;
      color: #000;
      -webkit-text-stroke: 0.3px yellow;
      text-align: center;
      line-height: 850px;
    }
    &:hover {
      cursor: pointer;
    }
  `;
  const Section03 = styled.section`
    width: 100%;
    height: 500px;
    border: 1px solid black;
    margin: 100px 0;
    background-color: black;
    text-align: center;

    p {
      font-size: 60px;
      color: #fff;
      -webkit-text-stroke: 2px black;
    }
  `;

  const Con_2 = styled.div`
    width: 15px;
    height: 600px;
    background-color: white;
  `;

  return (
    <div>
      <Wrap>
        <Section01 $url={data[1].img}>
          <Title>大丈夫だいじょうぶ。僕ぼく 最強さいきょうだから</Title>
          <p>天上天下唯我獨尊</p>
        </Section01>

        <Section02>
          <Con $url={data[2].img}>
            <p>六眼</p>
          </Con>

          <Con_2></Con_2>

          <Con $url={data[3].img}>
            <p>反転術式</p>
          </Con>

          <Con_2></Con_2>

          <Con $url={data[4].img}>
            <p>黑閃</p>
          </Con>

          <Con_2></Con_2>

          <Con $url={data[5].img}>
            <p>蒼</p>
          </Con>
        </Section02>

        <Section03>
          <Title>むりょうくうしょ</Title>
          <p>無量空処</p>
        </Section03>
      </Wrap>
    </div>
  );
};
