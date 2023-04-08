import { useSelector } from 'react-redux';

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
import { PokemonProps, RootState } from '../../store';

function Favoritos() {
  const { loading } = useSelector((state: RootState) => state.pokemons);
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
        <Heading>Favoritos</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {favourites.length != 0 ? (
            favourites.map((pokemon) => (
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
            ))
          ) : (
            <Heading>Não há pokemons favoritos</Heading>
          )}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Favoritos;
