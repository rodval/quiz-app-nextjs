import { ICategoryQuiz } from '@/interfaces/API';
import { Flex, Box, Image, Stack, Text } from '@chakra-ui/react';

type CategoryCardProps = {
  categoryDetail: ICategoryQuiz;
  onCardClick?: (category: ICategoryQuiz) => void;
};

const CategoryCard = (props: CategoryCardProps) => {
  const { categoryDetail, onCardClick } = props;
  const { id, level, category, userQuiz } = categoryDetail;
  const { title, image } = category;

  const onClick = () => {
    if (onCardClick) {
      onCardClick(categoryDetail);
    }
  };

  return (
    <Stack
      key={id}
      w="425px"
      h="190px"
      bgGradient="linear(to-r, purple.300, blue.300)"
      borderRadius={20}
      boxShadow="2xl"
      onClick={onClick}>
      <Flex alignItems="center" justifyContent="space-around">
        <Box position="relative" bottom={35} left={5}>
          <Image w={125} h={125} src={image} alt="Sociales" />
        </Box>
        <Box marginTop={35}>
          <Text textAlign={'right'} marginTop={12} fontWeight={450} color={'white'}>
            {' '}
            Nivel {level}
          </Text>
          <Text marginTop={1} fontSize={25} fontWeight={700} color={'white'}>
            {title}
          </Text>
        </Box>
      </Flex>
    </Stack>
  );
};

export default CategoryCard;
