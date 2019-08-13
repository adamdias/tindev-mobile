import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import io from 'socket.io-client';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import api from '../../services/api';

import styles from './styled';
import imgLogo from '../../assets/logo.png';
import imgDislike from '../../assets/dislike.png';
import imgLike from '../../assets/like.png';
import imgItsMatch from '../../assets/itsamatch.png';

function Main({ navigation }) {
  const _id = navigation.getParam('userId');
  const [users, setUsers] = useState([]);
  const [matchDev, setMatchDev] = useState(false);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs', {
        headers: {
          user: _id
        }
      });

      setUsers(response.data);
    }

    loadUsers();
  }, [_id]);

  async function handleDislike() {
    const [user, ...rest] = users;

    await api.post(`devs/${user._id}/dislikes`, null, {
      headers: {
        user: _id
      }
    });

    setUsers(rest);
  }

  async function handleLike() {
    const [user, ...rest] = users;

    await api.post(`devs/${user._id}/likes`, null, {
      headers: {
        user: _id
      }
    });

    setUsers(rest);
  }

  async function handleLogout() {
    await AsyncStorage.clear();
    navigation.navigate('Login');
  }

  useEffect(() => {
    const socket = io('http://localhost:3333', {
      query: { user: _id }
    });

    socket.on('match', dev => {
      setMatchDev(dev);
    });
  }, [_id]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleLogout}>
        <Image style={styles.logo} source={imgLogo} />
      </TouchableOpacity>

      <View style={styles.cardsContainer}>
        {users.length === 0 ? (
          <Text style={styles.empty}>Acabou :(</Text>
        ) : (
          users.map((user, index) => (
            <View key={user._id} style={[styles.card, { zIndex: users.length - index }]}>
              <Image
                style={styles.cardAvatar}
                source={{ uri: user.avatar }}
              />

              <View style={styles.cardFooter}>
                <Text style={styles.cardName}>{user.name}</Text>
                <Text style={styles.cardBio} numberOfLines={3}>{user.bio}</Text>
              </View>
            </View>
          ))
        )}
      </View>

      { users.length > 0 ? (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cardButton} onPress={handleDislike}>
            <Image source={imgDislike} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardButton} onPress={handleLike}>
            <Image source={imgLike} />
          </TouchableOpacity>
        </View>
      ) : (
        <View></View>
      ) }

      { matchDev && (
        <View style={styles.matchContainer}>
          <Image style={styles.itsMatch} source={imgItsMatch} />
          <Image style={styles.matchAvatar} source={{ uri: matchDev.avatar }} />
          <Text style={styles.matchName}>{matchDev.name}</Text>
          <Text style={styles.matchBio}>{matchDev.bio}</Text>

          <TouchableOpacity onPress={() => setMatchDev(null)}>
            <Text style={styles.closeMatch}>FECHAR</Text>
          </TouchableOpacity>
        </View>
      ) }
    </SafeAreaView>
  );
}

export default Main;
