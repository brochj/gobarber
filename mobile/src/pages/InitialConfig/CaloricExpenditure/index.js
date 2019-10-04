import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { differenceInCalendarYears, parseISO } from 'date-fns';

import { changeCalorieIntake } from '~/store/modules/user/actions';

import calculateCalories from '~/lib/scripts/dietScript';

// import { Container } from './styles';

export default function CaloricExpenditure({ navigation }) {
  const dispatch = useDispatch();

  const calorieIntake = useSelector(state => state.user.calorieIntake);
  const birthday = useSelector(state => state.user.birthday);
  const height = useSelector(state => state.user.height);
  const weight = useSelector(state => state.user.weight);
  const gender = useSelector(state => state.user.gender);
  const physicalActivity = useSelector(state => state.user.physicalActivity);

  useEffect(() => {
    const calculatedKcal = calculateCalories({
      age: differenceInCalendarYears(new Date(), parseISO(birthday)),
      height,
      weight,
      gender,
      physicalActivity,
    });
    dispatch(changeCalorieIntake(calculatedKcal));
  }, [birthday, dispatch, gender, height, physicalActivity, weight]);

  return (
    <View>
      <Text>CaloricExpenditure</Text>
      <Button
        title="Build Diet Plan"
        onPress={() => navigation.navigate('Objective')}
      />
      <Button
        title="Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
      <Text>{calorieIntake}</Text>
    </View>
  );
}

CaloricExpenditure.navigationOptions = {
  title: 'CaloricExpenditure',
};

CaloricExpenditure.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
