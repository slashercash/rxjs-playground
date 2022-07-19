import { BehaviorSubject, map } from 'rxjs';
import { getPokemonInfoByName } from '../api-connector/apiConnector';
import { PokemonInfoCache } from '../types/PokemonInfoCache';
import { pokemonInfoCache$ } from './PokemonInfoCache';

export const selectedPokemonNames$ = new BehaviorSubject<string[]>([]);

selectedPokemonNames$
  .pipe(
    map((s) =>
      s.filter(
        (name) => !pokemonInfoCache$.value.map((p) => p.name).includes(name)
      )
    )
  )
  .subscribe(async (newNames) => {
    const newEntries: PokemonInfoCache[] = await Promise.all(
      newNames.map(async (name) => ({
        name,
        info: await getPokemonInfoByName(name),
      }))
    );
    pokemonInfoCache$.next([...pokemonInfoCache$.value, ...newEntries]);
  });
