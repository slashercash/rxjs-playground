import { useObservableState } from 'observable-hooks';
import {
  pokemons$,
  selectedPokemonIds$,
  testString$,
} from '../observables/Observables';

const TestComponent = () => {
  useObservableState(testString$);
  const pokemons = useObservableState(pokemons$, []);

  return (
    <>
      <div>TestComponent</div>
      <div>{testString$.value}</div>
      {pokemons.map((p, i) => (
        <div key={i}>
          <input
            type='checkbox'
            checked={p.selected}
            onChange={() => {
              selectedPokemonIds$.next(
                p.selected
                  ? selectedPokemonIds$.value.filter((id) => id !== i)
                  : [...selectedPokemonIds$.value, i]
              );
            }}
          />
          <div key={i}>{p.name}</div>
        </div>
      ))}
    </>
  );
};

export default TestComponent;
