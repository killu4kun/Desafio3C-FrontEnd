import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Spinner,
  VStack,
} from '@chakra-ui/react';
import PokemonCard from '@components/PokemonCard';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import {
  AppDispatch,
  fetchPokemons,
  PokemonProps,
  RootState,
} from '../../store';

function List() {
  const { pokemons, loading } = useSelector(
    (state: RootState) => state.pokemons
  );

  const [favourites, setFavourites] = useLocalStorage<PokemonProps[]>(
    'favorites',
    []
  );

  const handleFavourites = (pokemon: PokemonProps) => {
    if (favourites.some((favourite) => favourite.name === pokemon.name)) {
      setFavourites(favourites.filter((item) => item.name !== pokemon.name));
    } else {
      setFavourites([...favourites, pokemon]);
    }
  };
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  if (loading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }

  return (
    <Box>
      <Container display="flex" flexDir="column" maxW="6xl" mt={10}>
        <Heading>Lista de pokemons</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {pokemons.map((pokemon) => (
            <VStack key={pokemon.url} align="top">
              <PokemonCard
                key={pokemon.url}
                pokemon={pokemon}
                liked={favourites.some(
                  (favourite) => favourite.name === pokemon.name
                )}
                setLiked={() => handleFavourites(pokemon)}
              />
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default List;
