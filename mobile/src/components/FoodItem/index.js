import React from 'react';
import {
  Container,
  Image,
  Content,
  Title,
  AmountView,
  Amount,
  Unit,
  CalorieView,
  CalorieIcon,
  Calorie,
  Divider,
} from './styles';

export default function FoodItem({data}) {
  return (
    <>
      <Container>
        <Image source={data.image} />
        <Content>
          <Title numberOfLines={1}>{data.title}</Title>
          <AmountView>
            <Amount style={{textAlignVertical: 'bottom'}}>{data.amount}</Amount>
            <Unit style={{textAlignVertical: 'bottom'}}>{data.unit}</Unit>
          </AmountView>
        </Content>
        <CalorieView>
          <CalorieIcon />
          <Calorie>{data.calorie}</Calorie>
        </CalorieView>
      </Container>
      <Divider />
    </>
  );
}
