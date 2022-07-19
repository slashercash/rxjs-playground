import { combineLatestWith, map } from 'rxjs';
import { Pokemon } from '../types/Pokemon';
import { pokemonInfoCache$ } from './PokemonInfoCache';
import { rawPokemons$ } from './RawPokemons';
import { selectedPokemonNames$ } from './SelectedPokemonNames';

export const pokemons$ = rawPokemons$.pipe(
  combineLatestWith(selectedPokemonNames$, pokemonInfoCache$),
  map(([rawPokemons, selectedPokemonNames, pokemonInfoCache]) =>
    rawPokemons.map((rawPokemon): Pokemon => {
      const selected = selectedPokemonNames.includes(rawPokemon.name);

      return {
        ...rawPokemon,
        selected,
        info: selected
          ? pokemonInfoCache.find((i) => i.name === rawPokemon.name)?.info
          : undefined,
      };
    })
  )
);
