import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {signInRequest} from '~/store/modules/auth/actions';

import Background from '~/components/Background/index';

export default function SignIn({navigation}) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('brochj@gmail.com');
  const [password, setPassword] = useState('123456');

  const loading = useSelector(state => state.auth.loading);

  function handleSignIn() {
    dispatch(signInRequest(email, password));
  }

  const passwordRef = useRef(null);

  return (
    <Background>
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
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Text style={styles.labelTxt}>Senha</Text>
        <TextInput
          ref={passwordRef}
          style={[styles.input, styles.inputSenha]}
          secureTextEntry
          maxLength={20}
          placeholder="Digite uma senha"
          value={password}
          onChangeText={text => setPassword(text)}
          onSubmitEditing={() => {}}
        />
        <TouchableOpacity style={styles.buttonCadastro} onPress={handleSignIn}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.buttonTxt}>Entrar</Text>
          )}
        </TouchableOpacity>
        <View style={styles.loginView}>
          <Text
            style={styles.loginTxt}
            onPress={() => navigation.navigate('SignUp')}>
            Criar conta gratuita
          </Text>
          <Text
            style={[styles.loginTxt, styles.loginWordTxt]}
            onPress={() => navigation.navigate('SignUp')}>
            Cadastrar
          </Text>
        </View>
      </View>
    </Background>
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

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
