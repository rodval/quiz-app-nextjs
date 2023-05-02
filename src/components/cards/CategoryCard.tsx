import { ICategory } from '@/interfaces/API';
import { Card, CardBody, Image, Stack, Text } from '@chakra-ui/react';

type CategoryCardProps = {
  categoryDetail: ICategory;
  onCardClick?: (category: ICategory) => void;
};

const CategoryCard = (props: CategoryCardProps) => {
  const { categoryDetail, onCardClick } = props;
  const { id, title } = categoryDetail;

  const onClick = () => {
    if (onCardClick) {
      onCardClick(categoryDetail);
    }
  };

  return (
    <Card key={id} direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outline" onClick={onClick}>
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Text py="2">{title}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default CategoryCard;
