import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState('brochj@gmail.com');
  const [password, setPassword] = useState('123456');

  const passwordInput = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.labelTxt}>Email</Text>
        <TextInput
          style={[styles.input, styles.inputEmail]}
          autoFocus
          blurOnSubmit={false}
          placeholder="seu-email@email.com"
          returnKeyType="next"
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
          onSubmitEditing={() => passwordInput.current.focus()}
        />
        <Text style={styles.labelTxt}>Senha</Text>
        <TextInput
          ref={passwordInput}
          style={[styles.input, styles.inputSenha]}
          secureTextEntry
          maxLength={20}
          placeholder="Digite uma senha"
          value={password}
          onChangeText={text => setPassword(text)}
          onSubmitEditing={() => {}}
        />
        <TouchableOpacity style={styles.buttonCadastro} onPress={() => {}}>
          <Text style={styles.buttonTxt}>Cadastrar</Text>
        </TouchableOpacity>
        <View style={styles.loginView}>
          <Text
            style={styles.loginTxt}
            onPress={() => navigation.navigate('SignIn')}
          >
            Já tem uma conta?
          </Text>
          <Text
            style={[styles.loginTxt, styles.loginWordTxt]}
            onPress={() => navigation.navigate('SignIn')}
          >
            Entrar
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  body: {
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,.5)',
    borderRadius: 5,
  },
  input: {
    height: 50,
    marginBottom: 10,
    padding: 5,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255,255,255,.80)',
    color: '#196A65',
    fontSize: 17,
  },
  inputEmail: {
    borderTopLeftRadius: 15,
  },
  inputSenha: {},
  labelTxt: {
    color: 'white',
    fontSize: 22,
  },
  buttonCadastro: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#196A65',
    borderBottomRightRadius: 15,
  },
  buttonTxt: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
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
