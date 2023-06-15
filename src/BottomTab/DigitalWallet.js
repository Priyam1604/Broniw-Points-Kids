import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SubmitPage = () => {
  const navigation = useNavigation();

  const handleBackToHome = () => {
    // Handle navigation back to Home
    navigation.navigate('DBoard');
  };

  return (
    <View style={styles.container}>
      <View style={styles.characterContainer}>
        <FontAwesome5 name="child" size={150} color="#F76B8A" />
      </View>
      <Text style={styles.title}>Hurray!</Text>
      <Text style={styles.subTitle}>Let's wait to get your BP approved</Text>
      <TouchableOpacity style={styles.backButton} onPress={handleBackToHome}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('AddReward')}>
          <FontAwesome5 name="gift" size={24} color="#888" />
          <Text style={styles.navText}>Reward</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('DBoard')}>
          <FontAwesome5 name="home" size={24} color="#888" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('RewardOptions')}>
          <FontAwesome5 name="gamepad" size={24} color="#888" />
          <Text style={styles.navText}>Game</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <FontAwesome5 name="user" size={24} color="#888" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SubmitPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  characterContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },
  backButton: {
    backgroundColor: '#F76B8A',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: '#888',
  },
});
