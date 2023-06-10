import { ICategoryQuiz } from '@/interfaces/API';
import { Box, Table, Thead, Tbody, Tr, Td, Text, Flex, GridItem } from '@chakra-ui/react';

type RankCardProps = {
  categoryDetail: ICategoryQuiz;
};

const RankCard = (props: RankCardProps) => {
  const { categoryDetail } = props || {};
  const { level, category, userQuizzes } = categoryDetail || {};

  return (
    <GridItem bg="gray.200" p={4} borderRadius={15}>
      <Box borderRadius="15">
        <Flex align="center" justify="center">
          <Box>
            <img src="/Img/logoProvisional.png" alt="Logo" width="150px" height="px" />
            <Text> {category.title} </Text>
            <Text>nivel {level}</Text>
          </Box>
        </Flex>
        <Table variant="simple">
          <Thead></Thead>
          <Tbody>
            {!userQuizzes || !userQuizzes.length ? (
              <Tr>
                <Td textAlign={'center'}>No data</Td>
              </Tr>
            ) : (
              userQuizzes.map((userQuiz) => (
                <Tr key={userQuiz.id}>
                  <Td>{userQuiz.user.firstName}</Td>
                  <Td>{userQuiz.score}</Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </Box>
    </GridItem>
  );
};

export default RankCard;
