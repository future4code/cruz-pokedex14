import {
  PokeCardContainer,
  PokeDetails,
  CardButtons,
} from './styles';
import { Button } from '../index';

const PokeCard = ({ pokemon, type, onClick, showDetails }) => {
  return (
    <PokeCardContainer type={pokemon.types[0].type.name}>
      <div>
        <img src={pokemon.sprites?.front_default} alt="front of the pokemon" />
      </div>
      <PokeDetails>
        <h3>#{pokemon.id}</h3>
        <h2>{pokemon.name}</h2>
        <CardButtons>
          <Button
            text={type === 'pokedex' ? 'Remover' : 'Adicionar'}
            textColor="white"
            color="red"
            onClick={onClick}
          />
          <Button text="Detalhes" color="white" textColor="red" onClick={showDetails} />
        </CardButtons>
      </PokeDetails>
    </PokeCardContainer>
  );
};

export default PokeCard;
