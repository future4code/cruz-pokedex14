import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../images/logo.png';
import LogoCrop from '../images/logocrop.png';
import { goToHomePage, goToPokedex } from '../routes/coordinator';

const HeaderDiv = styled.div`
  background-color: #ef5350;
  height: 150px;
  display: flex;
  justify-content: space-between;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: calc(20px + 1.5vw);
  @media (max-width: 700px) {
    text-align: center;
    margin-left: 10px;
    width: 35%;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  @media (max-width: 700px) {
    width: 50px;
    flex-wrap: wrap;
  }
  & > img:hover {
    cursor: pointer;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex: 1;
`;
const LogoImg = styled.img`
  width: auto;
  height: 100px;
  @media (max-width: 700px) {
    height: 50px;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;
const LogoImgCrop = styled.img`
  display: none;
  width: auto;
  height: 100px;
  @media (max-width: 700px) {
    height: 80px;
  }
  @media (max-width: 1200px) {
    display: block;
  }
`;

const Imagem1 = styled.img`
  width: auto;
  height: 100px;
  @media (max-width: 700px) {
    height: 60px;
  }
  @media (max-width: 1200px) {
    height: 60px;
  }
`;

const Imagem2 = styled.img`
  width: auto;
  height: 100px;
  @media (max-width: 700px) {
    height: 60px;
  }
  @media (max-width: 1200px) {
    height: 60px;
  }
`;
const Header = (props) => {
  const history = useHistory();
  return (
    <HeaderDiv>
      <HeaderContainer>
        <LogoContainer>
          {' '}
          <LogoImg src={Logo}></LogoImg>
          <LogoImgCrop src={LogoCrop}></LogoImgCrop>
        </LogoContainer>

        <TitleContainer>{props.titulo}</TitleContainer>
        <ImgContainer>
          <Imagem1
            src={props.imagem1}
            onClick={() => goToHomePage(history)}
          ></Imagem1>
          <Imagem2
            src={props.imagem2}
            onClick={() => goToPokedex(history)}
          ></Imagem2>
        </ImgContainer>
      </HeaderContainer>
    </HeaderDiv>
  );
};

export default Header;
