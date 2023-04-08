import { AiOutlineStar, AiOutlineUnorderedList } from 'react-icons/ai';
import { FiHome } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  List,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react';

import { NavItem } from '../NavItem';

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface LinkItemProps {
  name: string;
  icon: IconType;
  value: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, value: '/' },
  { name: 'Lista', icon: AiOutlineUnorderedList, value: 'list' },
  { name: 'Favoritos', icon: AiOutlineStar, value: 'favorites' },
];

export function SidebarContent({ onClose, ...rest }: SidebarProps) {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          data-testid="menu"
        >
          Menu
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <List>
        {LinkItems.map((link) => (
          <ListItem key={link.name} onClick={onClose}>
            <NavItem icon={link.icon} href={link.value}>
              {link.name}
            </NavItem>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
