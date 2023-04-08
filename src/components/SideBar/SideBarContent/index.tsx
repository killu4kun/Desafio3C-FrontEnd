import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiHome } from 'react-icons/fi';
import { AiOutlineStar, AiOutlineUnorderedList } from 'react-icons/ai';
import { IconType } from 'react-icons/lib';
import { useNavigate } from 'react-router-dom';
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

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const navigate = useNavigate();
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
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          onClick={() => navigate(link.value)}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};
