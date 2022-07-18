import { BehaviorSubject, combineLatestWith, map } from 'rxjs';
import { getAllPokemons } from '../api-connector/apiConnector';
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
  )
);

export const testString$ = new BehaviorSubject<string>('');

getAllPokemons().then((p) => rawPokemons$.next(p));
