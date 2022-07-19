import { BehaviorSubject } from 'rxjs';
import { PokemonInfoCache } from '../types/PokemonInfoCache';

export const pokemonInfoCache$ = new BehaviorSubject<PokemonInfoCache[]>([]);
