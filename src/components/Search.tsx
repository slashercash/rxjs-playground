import { useObservableState } from 'observable-hooks';
import { getAllPokemons } from '../api-connector/apiConnector';
import { usePokemon } from '../pokemon-provider/PokemonProvider';

const Search = () => {
  //   getAllPokemons().then((p) => console.log(p));

  const { testString$ } = usePokemon();
  const testString = useObservableState(testString$, testString$.value);

  return (
    <>
      <div>Search</div>
      <input
        type='text'
        value={testString}
        onChange={(e) => testString$.next(e.target.value)}
      />
    </>
  );
};

export default Search;
