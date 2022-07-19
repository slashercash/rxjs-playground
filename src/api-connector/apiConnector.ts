import axios from 'axios';
import { Pokemon } from '../types/Pokemon';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const getAllPokemons = () =>
  instance
    .get<{ results: Pokemon[] }>('pokemon/?limit=10')
    .then((res) => res.data.results);

export const getPokemonInfoByName = (name: string): Promise<string> =>
  instance
    .get<any>(`pokemon-species/${name}`)
    .then((res) => res.data.flavor_text_entries[0].flavor_text);
