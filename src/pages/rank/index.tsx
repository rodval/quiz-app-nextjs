import { Box, Text, Grid, GridItem } from '@chakra-ui/react';
import { RankCard } from '@/components/rankcard';

export default function Rank() {
  return (
    <Box textAlign="center" mt={8}>
      <Text fontSize="2xl" fontWeight="bold">
        LeaderBoard
      </Text>

      <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={6} mt={8} mx="auto" maxW="800px">
        <GridItem bg="gray.200" p={4}>
          <RankCard></RankCard>
        </GridItem>
        <GridItem bg="gray.200" p={4}>
          <RankCard></RankCard>
        </GridItem>
        <GridItem bg="gray.200" p={4}>
          <RankCard></RankCard>
        </GridItem>
      </Grid>
    </Box>
  );
}
