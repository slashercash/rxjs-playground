import { useObservableState } from 'observable-hooks';
import { allPokemons$, testString$ } from '../observables/Observables';

const TestComponent = () => {
  useObservableState(testString$);

  return (
    <>
      <div>TestComponent</div>
      <div>{testString$.value}</div>
      {allPokemons$.value.map((p, i) => (
        <div key={i}>{p.name}</div>
      ))}
    </>
  );
};

export default TestComponent;
