import axios from 'axios';
import { Pokemon } from '../types/Types';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const getAllPokemons = async () => {
  const res = await instance.get<{ results: Pokemon[] }>('pokemon/?limit=10');
  return res.data.results;
};
