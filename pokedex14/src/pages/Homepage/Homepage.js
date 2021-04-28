import { useHistory } from 'react-router-dom';
import { goToDetailspage } from '../../routes/coordinator';
import { PokeCard } from '../../components/index';
import styled from 'styled-components';
import Loader from "../../components/Loader"
import React, { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import Pagination from '../../components/Pagination/Pagination'


const PageContainer = styled.main`
  padding: 45px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const Homepage = () => {
  const history = useHistory();
  const { addToPokeDex, pokemons, pokedex, loading, changeCurrentPage, currentPage } = useContext(GlobalStateContext);

  const pokeCards =
    pokemons &&
    pokemons
      .filter((pokemon) => {
        return !pokedex?.some((register) => register.id === pokemon.id);
      })
      .map((item) => (
        <PokeCard
          key={item.id}
          pokemon={item}
          onClick={() => addToPokeDex(item)}
          showDetails={() => goToDetailspage(history, item.name)}
        />
      ));

  if (pokemons.length !== 0 && loading === false) {
    return (
      <>
        <PageContainer>{pokeCards}</PageContainer>;
        <Pagination currentPage={currentPage} changeCurrentPage={changeCurrentPage} />
      </>
    )
  }
  else {
    return <Loader />
  }
};

export default Homepage;
