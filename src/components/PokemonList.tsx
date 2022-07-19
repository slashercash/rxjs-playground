import styled from 'styled-components';
import { useObservableState } from '../custom-hooks/CustomHooks';
import { pokemons$ } from '../observables/Pokemons';
import { selectedPokemonNames$ } from '../observables/SelectedPokemonNames';
import { Pokemon } from '../types/Pokemon';

const StyledDiv = styled.div`
  border: 2px solid black;
  > div {
    display: flex;
  }
`;

const PokemonList = () => {
  const pokemons: Pokemon[] = useObservableState(pokemons$, []);

  const handleOnChange = (pokemon: Pokemon) => {
    selectedPokemonNames$.next(
      pokemon.selected
        ? selectedPokemonNames$.value.filter((name) => name !== pokemon.name)
        : [...selectedPokemonNames$.value, pokemon.name]
    );
  };

  return (
    <StyledDiv>
      {pokemons.map((p, i) => (
        <div key={i}>
          <input
            type='checkbox'
            checked={p.selected}
            onChange={() => handleOnChange(p)}
          />
          <div>
            {p.name} {p.info}
          </div>
        </div>
      ))}
    </StyledDiv>
  );
};

export default PokemonList;
