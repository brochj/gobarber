import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, Image } from 'react-native';
import { signUpRequest } from '~/store/modules/auth/actions';

import Background from '~/components/Background/index';
import logo from '~/assets/logo.png';
import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const [name, setName] = useState('Oscar Broch');
  const [email, setEmail] = useState('brochj@gmail.com');
  const [password, setPassword] = useState('123456');

  const loading = useSelector(state => state.auth.loading);

  function handleSignUp() {
    dispatch(signUpRequest(name, email, password));
  }

  const passwordRef = useRef();
  const emailRef = useRef();

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoFocus
            blurOnSubmit={false}
            placeholder="Nome Completo"
            returnKeyType="next"
            value={name}
            onChangeText={text => setName(text)}
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            ref={emailRef}
            icon="mail-outline"
            autoCorrect={false}
            autoCapitalize="none"
            blurOnSubmit={false}
            placeholder="Digite seu email"
            returnKeyType="next"
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            ref={passwordRef}
            icon="lock-outline"
            secureTextEntry
            maxLength={20}
            placeholder="Digite uma senha"
            value={password}
            returnKeyType="send"
            onChangeText={text => setPassword(text)}
            onSubmitEditing={handleSignUp}
          />
          <SubmitButton loading={loading} onPress={handleSignUp}>
            Cadastrar
          </SubmitButton>
          <View style={styles.loginView}>
            <Text
              style={styles.loginTxt}
              onPress={() => navigation.navigate('SignIn')}
            >
              Já tenho uma conta
            </Text>
          </View>
        </Form>
      </Container>
    </Background>
  );
}

const styles = StyleSheet.create({
  loginView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginTxt: {
    color: 'white',
    fontSize: 16,
  },
  loginWordTxt: {
    marginLeft: 5,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
