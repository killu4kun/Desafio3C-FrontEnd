import { useNavigate } from 'react-router-dom';

import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react';

function Home() {
  const navigate = useNavigate();
  return (
    <Container maxW="3xl">
      <Stack
        as={Box}
        textAlign="center"
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight="110%"
        >
          Pokemonlist
          <Text as="span" color="green.400">
            .app
          </Text>
        </Heading>
        <Text color="gray.500">
          Seja bem vindo a minha aplicação,você consegue acesso a lista de
          pokemons no menu lateral ou ao clicar no botão abaixo,enjoy.
        </Text>
        <Stack
          direction="column"
          spacing={3}
          align="center"
          alignSelf="center"
          position="relative"
        >
          <Button
            colorScheme="green"
            bg="green.400"
            rounded="full"
            px={6}
            _hover={{
              bg: 'green.500',
            }}
            onClick={() => navigate('/list')}
          >
            Lista pokemons
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Home;
