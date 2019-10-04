import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
`;

export const MealCard = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.37,
  shadowRadius: 7.49,

  elevation: 12,
})`
  background: #fff;
  margin: 10px 15px 15px;
  padding: 10px;
  border-radius: 5px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 22px;
  line-height: 28px;
  color: #585858;
`;
export const ActionButton = styled.TouchableOpacity`
  padding: 0 5px;
`;

export const ActionIcon = styled(Icon).attrs(props => ({
  size: props.size || 22,
  name: props.name || 'edit',
  color: props.color || '#000000',
}))`
  padding: 0 5px;
`;

export const Divider = styled.View`
  height: 0px;
  border-width: 0.5px;
  border-color: rgba(0, 0, 0, 0.1);
  margin: 3px 0;
`;
export const DailyPercent = styled.Text`
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CalorieIcon = styled(Icon).attrs(props => ({
  size: props.size || 28,
  name: props.name || 'whatshot',
  color: props.color || '#FF6A55',
}))``;
export const Calorie = styled.Text`
  font-size: 40px;
  margin-left: 10px;
  color: #585858;
`;

export const CalorieText = styled.Text`
  font-size: 18px;
  margin-left: 7px;
  color: #585858;
`;

export const ChangeCalorieIcon = styled(Icon).attrs(props => ({
  size: props.size || 50,
  color: props.color || '#196A65',
}))``;

export const Input = styled.TextInput`
  font-size: 40px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
`;

export const TextCalories = styled.Text`
  font-size: 20px;
  align-self: center;
`;

export const DishContent = styled.View`
  padding: 5px;
`;
