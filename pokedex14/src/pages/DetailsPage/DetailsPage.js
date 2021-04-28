import React, { useContext } from 'react'
import { useParams } from "react-router-dom";
import BASE_URL from '../../routes/urls'
import useRequestData from '../../Hooks/useRequestData'
import Loader from "../../components/Loader"
import Button from '../../components/Button/Button'
import {
  BtnContainer,
  DetailsCard,
  ColunaImagens,
  BoxImagens,
  Caracteristicas,
  Tipo,
  Informacoes,
  Movimentos,
  Tipos

} from './DetailsPageStyled'

import GlobalStateContext from '../../global/GlobalStateContext';

const DetailsPage = () => {

  const { loading, addToPokeDex, removeFromPokedex, pokemonRegistered } = useContext(GlobalStateContext);
  let totalStats = 0;

  const pathParams = useParams();

  const getDetails = useRequestData(`${BASE_URL}/pokemon/${pathParams.name}`, undefined);
  const registered = getDetails && pokemonRegistered(getDetails);

  if (getDetails !== 0 && loading === false) {
    return (
      <>
        <BtnContainer>
          <Button
            text={registered ? 'Remover da pokedex' : 'Adicionar a pokedex'}
            textColor={registered ? 'red' : 'white'}
            color={registered ? 'white' : 'red'}
            onClick={() => registered ? removeFromPokedex(getDetails) : addToPokeDex(getDetails)}
          />
        </BtnContainer>
        <DetailsCard>
          <ColunaImagens>
            {getDetails && (
              <>
                <BoxImagens src={getDetails.sprites.front_default} alt='front' />
                <BoxImagens src={getDetails.sprites.back_default} alt='back' />
              </>
            )}
          </ColunaImagens>


          <Caracteristicas>
            <h2>Características</h2>

            <table>
              <tbody>
                {getDetails &&
                  getDetails.stats.map((stat) => {
                    totalStats += stat.base_stat;
                    return (
                      <tr key={stat.stat.name}>
                        <td>{stat.stat.name}</td>
                        <td>{stat.base_stat}</td>
                        <td><meter min="0" max="190" low="60" high="90" optimum="120" value={stat.base_stat}></meter></td>
                      </tr>
                    );
                  })}
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td>{totalStats}</td>
                </tr>
              </tfoot>
            </table>

          </Caracteristicas>

          <Informacoes>

            <Tipos>

              <h2>Tipo</h2>
              <div>
                {getDetails && getDetails.types.map((type) => {
                  return (
                    <Tipo key={type.type.name} type={type.type.name}>{type.type.name}</Tipo>
                  )
                })
                }
              </div>

            </Tipos>

            <Movimentos>
              <h2>Movimentos</h2>

              <table>
                <thead>
                  <tr>
                    <th>Level</th>
                    <th>Move</th>
                  </tr>
                </thead>
                <tbody>
                  {getDetails &&
                    getDetails.moves.sort((a, b) => {
                      return a.version_group_details[0].level_learned_at - b.version_group_details[0].level_learned_at;
                    })
                      .filter((move) => {
                        return move.version_group_details[0].move_learn_method.name === "level-up"
                      })
                      .map((move, num) => {
                        return num < 40 && <tr key={move.move.name}>
                          <td>{move.version_group_details[0].level_learned_at}</td>
                          <td>{move.move.name} </td>
                        </tr>;
                      })}
                </tbody>
              </table>

            </Movimentos>
          </Informacoes>
        </DetailsCard>
      </>
    );
  }
  else {
    return <Loader />
  }

};

export default DetailsPage;
