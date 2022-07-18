import { createContext, useContext } from 'react';
import { BehaviorSubject } from 'rxjs';

const testString$ = new BehaviorSubject<string>('');

const observables = {
  testString$,
};

const PokemonContext = createContext(observables);

export const PokemonProvider: React.FunctionComponent<{
  children: JSX.Element[];
}> = ({ children }) => (
  <PokemonContext.Provider value={observables}>
    {children}
  </PokemonContext.Provider>
);

export const usePokemon = () => useContext(PokemonContext);
