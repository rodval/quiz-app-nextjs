import { Box, Text, Grid, Stack } from '@chakra-ui/react';
import { Navbar, RankCard } from '@/components';
import { GetCategories, UseTokenStore } from '@/services';
import { ICategoryQuiz } from '@/interfaces/API';
import { useState } from 'react';
import { useQuery } from 'react-query';

export default function Rank() {
  const { token } = UseTokenStore((tokenStore) => tokenStore);
  const [categories, setCategories] = useState<ICategoryQuiz[]>([]);

  const { isError } = useQuery({
    queryKey: 'categories',
    queryFn: () => GetCategories(token),
    onSuccess: (response) => {
      setCategories(response.data);
    },
  });

  return (
    <Stack spacing={8}>
      <Navbar />
      <Box textAlign="center" mt={8}>
        <Box mb={20} mt={20}>
          <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold">
            LeaderBoard
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="600">
            Acá podrás ver a los tres primeros lugares. Sigue jugando y podrás ocupar un lugar aquí.
          </Text>
        </Box>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={6}
          mt={8}
          mx="auto"
          maxW="800px"
          borderRadius={15}>
          {isError ? (
            <Text>error</Text>
          ) : (
            categories.map((category) => <RankCard key={category.id} categoryDetail={category} />)
          )}
        </Grid>
      </Box>
    </Stack>
  );
}
