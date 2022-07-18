import { useObservableState } from 'observable-hooks';
import { usePokemon } from '../pokemon-provider/PokemonProvider';

const TestComponent = () => {
  const { testString$ } = usePokemon();
  const testString = useObservableState(testString$, testString$.value);

  return (
    <>
      <div>TestComponent</div>
      <div>{testString}</div>
    </>
  );
};

export default TestComponent;
