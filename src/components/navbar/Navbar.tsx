import { Box, Flex, Button, Text, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import ROUTES from '@/constants/routes';
import { FiLogOut } from 'react-icons/fi';
import NextLink from 'next/link';

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
      justify={'space-between'}
      paddingX="3rem"
      paddingY="1rem"
      bgGradient="linear(to-r, purple.300, blue.300)"
      color="white"
      mx={2}>
      {/* Logo en el extremo derecho */}

      <Box>
        <img src="/Img/logoProvisional.png" alt="Logo" width="150px" height="px" />
      </Box>

      <Box>
        <Flex>
          <NextLink href="/categories" passHref>
            <Link mx={2}>Categorias</Link>
          </NextLink>
          <NextLink href="/rank">
            <Link mx={2}>Ranking</Link>
          </NextLink>
          <Button
            marginLeft={2}
            color="white"
            backgroundColor={'red'}
            variant="outline"
            size="sm"
            boxShadow="lg"
            leftIcon={<FiLogOut />}
            onClick={onLogoutClick}>
            Cerrar sesión
          </Button>
        </Flex>
      </Box>
      {/* Botón de cerrar sesión en el extremo izquierdo */}
    </Flex>
  );
}

export default Navbar;
