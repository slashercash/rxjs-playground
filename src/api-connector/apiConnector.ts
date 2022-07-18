import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const getAllPokemons = async () => {
  const res = await instance({
    method: 'get',
    url: 'pokemon/?limit=10',
  });
  return res.data.results;
};
