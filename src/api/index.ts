import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
});

interface APIProps {
  name: string;
  url?: string;
}

export const getPokemons = async (): Promise<APIProps[]> => {
  const result = await api.get('/');
  return result.data.results;
};

export default api;
