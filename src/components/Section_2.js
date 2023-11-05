import styled from "styled-components";
import { data } from "../api";

console.log(data);

export const Section_2 = () => {
  const Section_2 = styled.section`
    width: 100%;
    height: 100vh;
    border: 1px solid black;
  `;
  const Container = styled.div`
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
  const Container_1 = styled.div`
    width: 100%;
    height: 200vh;
    border: 1px solid black;
    background-color: black;
  `;
  const Con = styled.h5`
    text-align: center;
    font-size: 18px;
    margin: 50px 0;
    color: #000;
    -webkit-text-stroke: 0.3px yellow;
    h2 {
      font-size: 40px;
      margin-bottom: 30px;
    }
    p {
      color: #fff;
      font-size: 25px;

      margin-bottom: 50px;
      padding: 0 200px;
    }
  `;

  return (
    <Section_2>
      <Container $url={data[7].img}>
        <p>정작 모든 게 주어지면, 아무것도 하지 못하고</p>
      </Container>

      <Container_1>
        <Con>
          <h2>- 이타도리 유지 -</h2>
          <p>
            아끼는 제자. 스쿠나의 손가락을 먹은 탓에 처형 대상으로서 죽을 뻔
            했지만 '손가락을 전부 먹을 때까지는 집행유예'라는 식으로 무마해
            주었다. 이타도리는 고죠를 믿음직한 최강 선생님으로 여기며, 고죠는
            이타도리의 뛰어난 신체적 능력과 적에게 주눅들지 않는 성격을 높이 사
            미래에 자신과 뜻을 함께 할 제자 중 하나로 기대하고 있다. 고죠의 바보
            같은 장난에 잘 어울려서 서로 죽이 매우 잘 맞는 개그 콤비. 전반적으로
            우호적인 관계이다. 지나치게 올곧은 성품을 지닌 이타도리가 주술사
            일을 하며 멘탈이 갈려나갈 것을 걱정해 나나미에게 정신적인 케어를
            부탁하는 등 신경을 써 주기도 했다.
          </p>
        </Con>

        <Con>
          <h2>- 옷코츠 유타 -</h2>
          <p>
            이타도리 유지와 마찬가지로 사형당할 위기에 처한 것을 고죠가
            구해주었다. 고죠가 자신만큼, 혹은 자신보다 강해질 것을 기대하는 제자
            중 하나이며 상호 신뢰 관계. 제자 중 유일하게 고죠와 같은 특급이다.
            평소 경박한 고죠도 유타와 함께 있을 때는 비교적 진지한 이야기를 할
            때가 많은 편. 고2 시점에서 이미 자신과 어깨를 나란히 할 실력자이기에
            자신의 신변에 문제가 생겼을 때를 대비해 다른 제자들을 부탁하기도
            했다.
          </p>
        </Con>

        <Con>
          <h2>- 후시구로 메구미 -</h2>
          <p>
            선생이 되기 전 영입한 첫 제자. 첫 만남 당시에는 제 아버지와 똑 닮은
            외모 때문에 불쾌한 감상을 내비치기도 했으나 그것도 처음 뿐, 이후에는
            사적인 감정은 배제하고 젠인 가에 끌려가지 않도록 막아주는 것은 물론
            일상 생활 전반에 도움을 주었으며 체술도 직접 가르쳤다. 9년이라는 꽤
            오랜 시간동안 함께 해왔던 만큼 유독 진심어린 충고를 많이 해주는
            편이며 자신만큼 강해질 것이라 기대하는 듯한 발언을 하기도 했다.
            전반적으로 단순히 스승-제자 사이라기보다는 보호자-피보호자에 가까운
            사이.
          </p>
        </Con>

        <Con>
          <h2>- 게토 스구루 -</h2>
          <p>
            하나뿐인 친우. 고전 시절부터 가장 친했던 친구이며 가끔 의견이 맞지
            않아 티격태격 하곤 했지만 선악의 기준을 "게토"라고 생각할 정도로 그
            가치관을 존중했고 신뢰했다. 여러모로 고죠의 삶에 큰 영향을 끼친
            인물이며 때문에 주저사로 이반하고 결국 제 손으로 죽인 뒤에도 변함
            없이 쭉 친구라고 생각했다. 그렇기에 유일한 약점으로서 시부야 사변
            당시 켄쟈쿠의 함정에 제대로 걸려 옥문강에 봉인당하는 계기가 되기도
            했다. 반대로 게토 역시 주술계를 배반한 이후에도 고죠를 여전히 친우로
            여겼다.
          </p>
        </Con>

        <Con>
          <h2>- 나나미 켄토 -</h2>
          <p>
            신뢰하는 후배이자 동료. 고전 1년 후배로 주술사로서의 뛰어난 실력 뿐
            아니라 그의 어른스러운 면모 또한 높게 사고 있는지 이타도리의 지도와
            멘탈 케어를 맡기기도 했다. 준페이 사건 때 이타도리가 죄책감을 가지지
            않도록 배려해 준 그에게 "역시 너에게 맡기길 잘 했다"고 말하기도
            했다. 평소 고죠의 실없는 장난의 주 희생양 중 한 명이기에 바보 취급을
            받기 일쑤지만 서로 신뢰하는 사이이다.
          </p>
        </Con>
      </Container_1>
    </Section_2>
  );
};
