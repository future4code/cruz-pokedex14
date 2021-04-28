import axios from 'axios';


const getAllPokemons = async (quantity, offset) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${quantity}&offset=${offset}`
    );

    const pokemonsPromises = response.data.results.map(async (response) => {
      const pokeData = await axios.get(response.url);
      return pokeData;
    });

    let pokemonArray = await Promise.all(pokemonsPromises);
    pokemonArray = pokemonArray.map((item) => item.data);

    return pokemonArray;
  } catch (err) {
    console.log(err);
  }
};

export default getAllPokemons;
