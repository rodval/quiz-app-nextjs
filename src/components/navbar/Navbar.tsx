import { Box, Flex, Button, Text, Link, Image } from '@chakra-ui/react';
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
      justify={'space-between'}
      paddingX="3rem"
      paddingY="1rem"
      bgGradient="linear(to-r, purple.300, blue.300)"
      color="white"
      mx={2}>
      <Box>
        <Image src="/Img/logoProvisional.png" alt="Logo" width="150px" height="px" />
      </Box>

      <Box>
        <Flex>
          <Link marginLeft={10} href={ROUTES.CATEGORIES}>
            <Text>Categorias</Text>
          </Link>
          <Link marginLeft={5} href={ROUTES.RANK}>
            <Text>Ranking</Text>
          </Link>
          <Button
            marginLeft={5}
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
    </Flex>
  );
}

export default Navbar;
