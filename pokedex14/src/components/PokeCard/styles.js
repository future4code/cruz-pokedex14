import styled from 'styled-components';

const typeColors = {
  fire: '#EE8130',
  grass: '#7AC74C',
  water: '#6390F0',
  bug: '#A6B91A',
  normal: '#A8A77A',
  flying: '#A98FF3',
  fighting: '#C22E28',
  ghost: '#735797',
  ground: '#E2BF65',
  ice: '#96D9D6',
  poison: '#A33EA1',
  psychic: '#F95587',
  rock: '#B6A136',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  electric: '#F7D02C',
  fairy: '#D685AD',
};

const PokeCardContainer = styled.article`

  box-sizing: content-box;
  padding: 20px 0;
  border-radius: 12px;
  font-family: sans-serif;
  background: #ececec;

  display: flex;
  flex-direction: column;

  & > div:first-of-type {
    padding: 0 16px;
    & > img {
      border-radius: 8px;
      background: ${(props) => typeColors[props.type]};
      width: 100%;
      height: 100%;
      object-fit: contain;

      :hover {
        transform: scale(1.03);
      }
    }
  }
`;

const PokeDetails = styled.section`
  padding: 0 15px;
  display: flex;
  flex-direction: column;

  & > h2 {
    text-align: center;
    text-transform: capitalize;
  }

  & > h3 {
    padding: 0;
    margin:0;
    color: #7c7c7c;
  }
`;

const CardButtons = styled.section`
  display: flex;
  gap: 10px;

  & > button {
    flex: 1;
  }
`;

export { PokeCardContainer, PokeDetails, CardButtons };
