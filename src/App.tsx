import Search from './components/Search';
import TestComponent from './components/TestComponent';
import { PokemonProvider } from './pokemon-provider/PokemonProvider';

const App = () => {
  return (
    <PokemonProvider>
      <Search />
      <TestComponent />
    </PokemonProvider>
  );
};

export default App;
