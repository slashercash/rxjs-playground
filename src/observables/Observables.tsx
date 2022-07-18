import { BehaviorSubject, combineLatestWith, map, switchMap } from 'rxjs';
import {
  getAllPokemons,
  getPokemonInfoByName,
} from '../api-connector/apiConnector';
import { Pokemon } from '../types/Types';

const rawPokemons$ = new BehaviorSubject<Pokemon[]>([]);

export const selectedPokemonIds$ = new BehaviorSubject<number[]>([]);

export const pokemons$ = rawPokemons$.pipe(
  combineLatestWith(selectedPokemonIds$),
  map(([rawPokemons, selectedPokemonIds]) =>
    rawPokemons.map((p, i) => ({
      ...p,
      selected: selectedPokemonIds.includes(i),
    }))
  ),
  switchMap((pokemons) =>
    Promise.all(
      pokemons.map(
        async (p): Promise<Pokemon> => ({
          ...p,
          info: p.selected ? await getPokemonInfoByName(p.name) : undefined,
        })
      )
    )
  )
);

export const testString$ = new BehaviorSubject<string>('');

getAllPokemons().then((p) => rawPokemons$.next(p));
