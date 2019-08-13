import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  KeyboardAvoidingView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Platform
} from 'react-native';
import api from '../../services/api';

import styles from './styled';
import logo from '../../assets/logo.png';

function Login({ navigation }) {
  const [username, setUsername] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then(userLogged => {
      if (userLogged) {
        navigation.navigate('Main', { userId: userLogged });
      }
    });
  }, []);

  async function handleLogin() {
    try {
      const response = await api.post('/devs', { username });

      const { _id } = response.data;

      await AsyncStorage.setItem('user', _id);

      navigation.navigate('Main', { userId: _id });
    } catch (err) {
      alert('Usuário não encontrado no github');
    }
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === 'ios'}
      style={styles.container}
    >
      <Image
        source={logo}
      />

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Digite seu usuário do github:"
        placeholderTextColor="#999"
        value={username}
        onChangeText={setUsername}
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

export default Login;
