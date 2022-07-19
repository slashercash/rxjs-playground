import { useObservableState } from 'observable-hooks';
import { pokemons$ } from '../observables/Pokemons';
import { selectedPokemonNames$ } from '../observables/SelectedPokemonNames';
import { Pokemon } from '../types/Pokemon';

const TestComponent = () => {
  const pokemons: Pokemon[] = useObservableState(pokemons$, []);

  const handleOnChange = (pokemon: Pokemon) => {
    selectedPokemonNames$.next(
      pokemon.selected
        ? selectedPokemonNames$.value.filter((name) => name !== pokemon.name)
        : [...selectedPokemonNames$.value, pokemon.name]
    );
  };

  return (
    <>
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
    </>
  );
};

export default TestComponent;
