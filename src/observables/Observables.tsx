import { BehaviorSubject } from 'rxjs';
import { getAllPokemons } from '../api-connector/apiConnector';
import { SimplePokemon } from '../types/Types';

export const allPokemons$ = new BehaviorSubject<SimplePokemon[]>([]);

export const testString$ = new BehaviorSubject<string>('');

getAllPokemons().then((p) => allPokemons$.next(p));
