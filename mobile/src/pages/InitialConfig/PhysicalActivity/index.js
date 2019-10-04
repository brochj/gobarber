import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { View, Text, Button } from 'react-native';

import { changePhysicalActivity } from '~/store/modules/user/actions';

// import { Container } from './styles';

export default function PhysicalActivity({ navigation }) {
  const dispatch = useDispatch();

  function handlePhysicalActivity(level) {
    dispatch(changePhysicalActivity(level));
    navigation.navigate('CaloricExpenditure');
  }
  return (
    <View>
      <Text>PhysicalActivity</Text>
      <Button
        title="CaloricExpenditure"
        onPress={() => navigation.navigate('CaloricExpenditure')}
      />

      <Button
        style={{ marginTop: 15 }}
        title="light"
        onPress={() => handlePhysicalActivity('light')}
      />

      <Button
        style={{ marginTop: 15 }}
        title="moderate"
        onPress={() => handlePhysicalActivity('moderate')}
      />

      <Button
        style={{ marginTop: 15 }}
        title="high"
        onPress={() => handlePhysicalActivity('high')}
      />

      <Button
        style={{ marginTop: 15 }}
        title="intense"
        onPress={() => handlePhysicalActivity('intense')}
      />
    </View>
  );
}

PhysicalActivity.navigationOptions = {
  title: 'PhysicalActivity',
};

PhysicalActivity.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
