import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { View, Text, Button } from 'react-native';

import { updateRequest } from '~/store/modules/user/actions';

import { Container, Label, Input } from './styles';

export default function UserBasicData({ navigation }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('Oscar');
  const [email, setEmail] = useState('brochj@gmail.com');
  const [birthday, setBirthday] = useState('1994-06-20T00:00:00-03:00');
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('95');
  const [height, setHeight] = useState('175');

  function handleUserUpdate() {
    dispatch(
      updateRequest({
        name,
        email,
        birthday,
        gender,
        weight,
        height,
      })
    );
  }

  return (
    <View>
      <Text>UserBasicData</Text>
      <Button
        title="PhysicalActivity"
        onPress={() => {
          handleUserUpdate();
          navigation.navigate('PhysicalActivity');
        }}
      />
      {/* <Button title="update" onPress={handleUserUpdate} /> */}
      <Container>
        <Label>name</Label>
        <Input
          value={name}
          placeholder="name"
          onChangeText={text => setName(text)}
        />
      </Container>
      <Container>
        <Label>email</Label>
        <Input
          value={email}
          placeholder="email"
          onChangeText={text => setEmail(text)}
        />
      </Container>
      <Container>
        <Label>birthday</Label>
        <Input
          value={birthday}
          placeholder="birthday"
          onChangeText={text => setBirthday(text)}
        />
      </Container>
      <Container>
        <Label>gender</Label>
        <Input
          value={gender}
          placeholder="gender"
          onChangeText={text => setGender(text)}
        />
      </Container>
      <Container>
        <Label>weight</Label>
        <Input
          value={weight}
          placeholder="weight"
          onChangeText={text => setWeight(text)}
        />
      </Container>
      <Container>
        <Label>height</Label>
        <Input
          value={height}
          placeholder="height"
          onChangeText={text => setHeight(text)}
        />
      </Container>
    </View>
  );
}

UserBasicData.navigationOptions = {
  title: 'User',
};

UserBasicData.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
