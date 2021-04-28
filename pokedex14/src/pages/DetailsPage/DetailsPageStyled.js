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
  dark: '#705746',
  steel: '#B7B7CE',
  dragon: '#6F35FC',
  electric: '#F7D02C',
  fairy: '#D685AD',
};

export const BtnContainer = styled.div`
  display: flex;
  padding-top: 10px;
  justify-content: center;
`

export const DetailsCard = styled.div`
  width: 90%;
  display: flex; 
  justify-content: center;
  padding: 10px 10px 20px;

  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border: 1px solid black;
  border-radius: 15px;

  margin-top: 40px;
  margin-left: 80px;

  backdrop-filter: blur(5px);
  text-align: center;

  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(169, 169, 169, 0.5);

  @media (max-width: 1200px) {
    margin-left: 35px;
    margin-top: 100px;
  }
  @media (max-width: 700px) {
    margin-left: 10px;
    margin-top: 30px;
    overflow: hidden;
    width: 95%;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const ColunaImagens = styled.div`
  flex: 1;
  height: 75%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const BoxImagens = styled.img`
  width: 50%;
  @media (max-width: 700px) {
    height: 20vh;
  }
`;

export const Caracteristicas = styled.div`
  text-align: left;
  flex: 2;
  
  & > h2 {
    text-align: center;
    font-size: 1.75rem;
  }
  & > table {
    width: 100%;
    border-collapse: collapse;
    text-transform: capitalize;

    tr {
      border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    }

    & td {
      font-size: 16px;
      padding: 2px 8px; 
    }

    tr > td:first-of-type {
      width: 22%;
      
    }

    tr > td:nth-of-type(2) {
      text-align: center;
      width: 12%;
      
    }
    tr > td:last-of-type {
      meter {
        height: 30px;
        width: 90%;
      }
    }

    tfoot td:last-of-type {
      font-weight: bold;
    }

  }
`
export const Informacoes = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const Tipos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  & > div {
    display: flex;
    gap: 10px;
  }
`
export const Tipo = styled.span`
  text-transform: capitalize;
  font-weight: bold;
  background: ${(props) => typeColors[props.type]};
  padding: 6px 22px;
  border-radius: 4px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

export const Movimentos = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  max-height: 700px;

  & > table {
    align-self: center;
    width: 70%;

    th {
      background: rgba(0, 0, 0, 0.3);
    }

    td, th {
      padding: 1px 5px;
      border: 1px solid rgba(0, 0, 0, 0.5);
    }

    thead {
      th:last-of-type {
        text-align: left;
      }
    }

    tr > td:last-of-type {
      text-align: left;
    }
  }
`
