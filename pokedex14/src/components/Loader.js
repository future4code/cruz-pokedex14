import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PokeBall from '../images/pokeball.png';

const spin = keyframes`
0% { 
  transform: rotate(0deg); 
}
100% {
   transform: rotate(360deg); 
}
`;

const PokeBallImg = styled.img`
  animation: ${spin} 2s linear infinite;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
`;

class Loader extends Component {
  render() {
    return (
      <Wrapper>
        <PokeBallImg src={PokeBall} />
      </Wrapper>
    );
  }
}
export default Loader;
