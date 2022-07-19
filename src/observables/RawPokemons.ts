import { BehaviorSubject } from 'rxjs';
import { getAllPokemons } from '../api-connector/apiConnector';
import { Pokemon } from '../types/Pokemon';

export const rawPokemons$ = new BehaviorSubject<Pokemon[]>([]);

getAllPokemons().then((p) => rawPokemons$.next(p));
