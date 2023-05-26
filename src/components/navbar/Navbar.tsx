import { Box, Flex, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import ROUTES from '@/constants/routes';
import { FiLogOut } from 'react-icons/fi';

function Navbar() {
  const router = useRouter();

  const onLogoutClick = () => {
    router.push(ROUTES.HOME);
  };

  return (
    <Flex
      w="full"
      h={75}
      as="nav"
      align="center"
      justify="space-between"
      paddingX="3rem"
      paddingY="1rem"
      bgGradient="linear(to-r, purple.300, blue.300)"
      color="white"
      mx={2}>
      {/* Logo en el extremo derecho */}

      <Box>
        <img src="/Img/logoProvisional.png" alt="Logo" width="150px" height="px" />
      </Box>

      {/* Botón de cerrar sesión en el extremo izquierdo */}
      <Button colorScheme="red" variant="outline" size="sm" leftIcon={<FiLogOut />} onClick={onLogoutClick}>
        Cerrar sesión
      </Button>
    </Flex>
  );
}

export default Navbar;
