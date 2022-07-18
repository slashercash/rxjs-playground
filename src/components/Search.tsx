import { useObservableState } from 'observable-hooks';
import { testString$ } from '../observables/Observables';

const Search = () => {
  useObservableState(testString$);

  return (
    <>
      <div>Search</div>
      <input
        type='text'
        value={testString$.value}
        onChange={(e) => testString$.next(e.target.value)}
      />
    </>
  );
};

export default Search;
