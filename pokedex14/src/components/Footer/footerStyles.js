import styled from "styled-components";


export const DivFooter = styled.div`
  background-color: #ef5350;
  font-family: 'Press Start 2P', cursive;
  color: white;
  height: 290px;
  margin-top: 4em;
  @media (max-width: 1200px) {
    height: 30%;
  }
  @media (max-device-width: 420px) {

    height: 10%;
  }
  
`;

export const DivContainer = styled.div`
  padding: 0 10vw;
`

export const DivImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 25px 0 20px 0;
`;

export const DivText = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0 10px 0;
  border: 1px solid black;
  border-left: none;
  border-right: none;
  text-align: center;
  font-size: calc(10px + 0.1vw);
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ImgPokemon = styled.img`
  width: 6%;
  @media (max-width: 1200px) {
    width: 10%;
  }
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 20%;
  }
`;

export const Title = styled.p`
 font-weight: bold;
`

export const Copyright = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: calc(10px + 0.1vw);
  padding-top: 5px;
  padding-bottom: 5px;
  color:black;
  background-color: white;

`