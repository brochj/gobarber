import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex-direction: row;
  background: #f5f5f5;
  align-items: center;
  justify-content: center;
  height: 75px;
  padding: 15px;
`;

export const Image = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 30px;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  margin-left: 15px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 5px;
  color: #333;
`;

export const AmountView = styled.View`
  flex-direction: row;
`;

export const Amount = styled.Text`
  font-size: 22px;
  color: #525252;
`;

export const Unit = styled.Text.attrs({})`
  margin-left: 8px;
  font-size: 14px;
  color: #525252;
`;

export const CalorieView = styled.Text``;

export const CalorieIcon = styled(Icon).attrs(props => ({
  size: props.size || 22,
  name: props.name || 'whatshot',
  color: props.color || '#FF6A55',
}))``;

export const Calorie = styled.Text`
  font-size: 30px;
  margin-left: 10px;
  color: #333;
`;

export const Divider = styled.View`
  height: 0px;
  border-width: 0.5px;
  border-color: rgba(0, 0, 0, 0.1);
  margin: 3px 0;
`;
