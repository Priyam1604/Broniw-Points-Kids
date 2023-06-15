import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [isNewUser, setIsNewUser] = useState(true);
  const [newPin, setNewPin] = useState('');
  const [confirmNewPin, setConfirmNewPin] = useState('');

  const handleNextPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Brownie Points</Text>
        {/* <Image source={require('/Users/priyam/Brownie_Points/src/BottomTab/1.png')} style={styles.logo} /> */}
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>{isNewUser ? 'Create New PIN' : 'Enter New PIN'}</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={24} color="black" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            value={newPin}
            onChangeText={setNewPin}
            placeholder="Enter new PIN"
            secureTextEntry={true}
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.label}>Confirm New PIN</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={24} color="black" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            value={confirmNewPin}
            onChangeText={setConfirmNewPin}
            placeholder="Confirm new PIN"
            secureTextEntry={true}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleNextPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsNewUser(!isNewUser)}>
          <Text style={styles.switchText}>
            {isNewUser ? "Already have an account? Log In" : "Create a new account"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F76B8A',
  },
  form: {
    width: '80%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  button: {
    backgroundColor: '#F76B8A',
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  switchText: {
    color: '#000',
    marginTop: 10,
    textAlign: 'center',
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
  },
});
