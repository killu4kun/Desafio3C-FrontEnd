import { BsArrowUpRight, BsHeart, BsHeartFill } from 'react-icons/bs';

import { Box, Center, Flex, HStack, Link, Text } from '@chakra-ui/react';

function PokemonCard({ pokemon, liked, setLiked }: any) {
  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded="sm"
        my={5}
        mx={[0, 5]}
        overflow="hidden"
        bg="white"
        border="1px"
        borderColor="black"
      >
        <Box p={4}>
          <Box
            bg="black"
            display="inline-block"
            px={2}
            py={1}
            color="white"
            mb={2}
          >
            <Text fontSize="lg" fontWeight="medium" data-testid='pokemons-names'>
              {pokemon.name}
            </Text>
          </Box>
        </Box>
        <HStack borderTop="1px" color="black">
          <Link href={pokemon.url} data-testid="link">
            <Flex
              as={'button'}
              p={4}
              alignItems="center"
              justifyContent="space-between"
              roundedBottom="sm"
              cursor="pointer"
              w="full"
            >
              <Text fontSize="md" fontWeight="semibold">
                View more
              </Text>
              <BsArrowUpRight />
            </Flex>
          </Link>
          <Flex
            p={4}
            alignItems="center"
            justifyContent="space-between"
            roundedBottom="sm"
            borderLeft="1px"
            cursor="pointer"
            onClick={setLiked}
          >
            {liked ? (
              <BsHeartFill
                fill="red"
                fontSize="24px"
                data-testid="heart-icon2"
              />
            ) : (
              <BsHeart data-testid="heart-icon" fontSize="24px" />
            )}
          </Flex>
        </HStack>
      </Box>
    </Center>
  );
}

export default PokemonCard;
