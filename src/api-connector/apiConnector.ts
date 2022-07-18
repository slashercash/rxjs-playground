import axios from 'axios';
import { SimplePokemon } from '../types/Types';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const getAllPokemons = async () => {
  const res = await instance.get<{ results: SimplePokemon[] }>(
    'pokemon/?limit=10'
  );
  return res.data.results;
};
