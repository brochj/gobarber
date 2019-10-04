import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';
import { FloatingAction } from 'react-native-floating-action';
import { Text } from 'react-native-ui-kitten';
import DishCardItem from './DishCarditem';

import CalorieIcon from '~/components/Icons/CalorieIcon';
import { Container, Header, Title, CalorieGoal } from './styles';

import {
  getDishesRequest,
  createDishRequest,
  deleteDishRequest,
  changeActiveDish,
} from '~/store/modules/dish/actions';

export default function Meal() {
  const dispatch = useDispatch();

  const mealId = useSelector(state => state.meal.id);
  const dietPlanId = useSelector(state => state.dietPlan.id);
  const dishes = useSelector(state => state.dish.dishes);

  const [showModal, setShowModal] = useState(false);
  const [DishTitle, setDishTitle] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getDishesRequest(dietPlanId, mealId));
  }, [mealId, showModal]); // eslint-disable-line

  function handleCreateDish() {
    dispatch(createDishRequest({ title: DishTitle }, dietPlanId, mealId));
  }

  function handleDeleteDish(dishId) {
    dispatch(deleteDishRequest(dietPlanId, mealId, dishId));
    handleRefreshDishes();
  }

  function handleRefreshDishes() {
    setRefreshing(true);
    dispatch(getDishesRequest(dietPlanId, mealId));
    setRefreshing(false);
  }

  function handleActiveDish(dish) {
    dispatch(changeActiveDish(dish));
  }

  return (
    <>
      <Container>
        <FlatList
          data={dishes}
          refreshing={refreshing}
          onRefresh={handleRefreshDishes}
          renderItem={({ item }) => (
            <DishCardItem
              data={item}
              onLongPress={() => handleDeleteDish(item.id)}
              onPress={() => handleActiveDish(item)}
            />
          )}
          keyExtractor={item => String(item.id)}
        />
      </Container>
      <FloatingAction
        overlayColor="rgba(0,0,0,0.05)"
        showBackground={false}
        onPressMain={() => {
          setShowModal(!showModal);
        }}
        visible={!showModal}
      />

      <Modal
        isVisible={showModal}
        backdropOpacity={0.5}
        backdropColor="#000"
        showBackground={false}
        onBackdropPress={() => {
          setShowModal(!showModal);
        }}
      >
        <>
          <View
            style={{
              backgroundColor: 'white',
              padding: 22,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              borderColor: 'rgba(0, 0, 0, 0.1)',
            }}
          >
            <Text>Criar nova opção de refeição</Text>
            <TextInput
              autoFocus
              placeholder="Digite o nome desse prato"
              onChangeText={text => setDishTitle(text)}
              onSubmitEditing={() => {
                setShowModal(!showModal);
                handleCreateDish();
                handleRefreshDishes();
              }}
            />
          </View>
        </>
      </Modal>
    </>
  );
}

Meal.navigationOptions = ({ navigation }) => {
  const title = navigation.getParam('title');
  const calorie = navigation.getParam('calorie');

  return {
    title,
    headerRight: <HeaderCalorie calorie={calorie} />,
  };
};

function HeaderCalorie({ calorie }) {
  return (
    <View
      style={{ flexDirection: 'row', marginRight: 15, alignItems: 'center' }}
    >
      <CalorieIcon color="#333" />
      <Text category="h5">{calorie}</Text>
    </View>
  );
}
