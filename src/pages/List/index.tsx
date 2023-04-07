import { Box } from '@chakra-ui/react';
import PokemonCard from '@components/PokemonCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, fetchPokemons, RootState } from '../../store';

function List() {
  const { pokemons, loading } = useSelector(
    (state: RootState) => state.pokemons
  );
  const dispatch = useDispatch<AppDispatch>();

  console.log(pokemons);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  if (loading) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemon={pokemon} />
      ))}
    </Box>
  );
}

export default List;
