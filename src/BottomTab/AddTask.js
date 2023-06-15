import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AskingPage = () => {
  const navigation = useNavigation();
  const [answer, setAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (text) => {
    setAnswer(text);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulating a delay before navigating to the next page
    setTimeout(() => {
      navigation.navigate('DigitalWallet');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.characterContainer}>
        <FontAwesome5 name="user-alt" size={150} color="#F76B8A" />
      </View>
      <Text style={styles.question}>How often have you done this task?</Text>
      <TextInput
        style={styles.answerInput}
        value={answer}
        onChangeText={handleInputChange}
        placeholder="Enter your answer"
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Text style={styles.submitButtonText}>Progressing...</Text>
            <Text style={styles.submitButtonText}>Please wait...</Text>
          </>
        ) : (
          <Text style={styles.submitButtonText}>Submit</Text>
        )}
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

export default AskingPage;

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
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  answerInput: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#F76B8A',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 40,
  },
  submitButtonText: {
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
