import styled from "styled-components";
import { Link } from "react-router-dom";
import { data } from "../api";

console.log(data);

export const Header = () => {
  const SHeader = styled.header`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  `;

  const InHeader = styled.header`
    width: 100%;
    height: 80px;
    padding: 0 200px;
    line-height: 70px;
    background-color: black;
    display: flex;
    justify-content: space-between;
  `;

  const Con = styled.div`
    width: 200px;
    height: 80px;
    background: url(${(props) => props.$url}) no-repeat center / cover;
  `;

  const Nav = styled.div`
    width: 400px;
    height: 100%;
    display: flex;
    justify-content: space-between;
  `;

  const Box = styled.div`
    all: unset;
    line-height: 70px;
    font-size: 25px;
    font-weight: 900;
    color: #000;
    -webkit-text-stroke: 0.3px yellow;
  `;

  return (
    <div>
      <SHeader>
        <InHeader>
          <Link to={"/"}>
            <Con $url={data[0].img} />
          </Link>

          <Nav>
            <Box>
              <Link to={"/Sub/1"}>五条 悟</Link>
            </Box>

            <Box>
              <Link to={"/Sub/2"}>인간관계</Link>
            </Box>

            <Box>
              <Link to={"/Sub/3"}>강함</Link>
            </Box>
          </Nav>
        </InHeader>
      </SHeader>
    </div>
  );
};
