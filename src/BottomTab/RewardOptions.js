import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const GamePage = () => {
  const wheelRef = useRef(null);
  const [canSpin, setCanSpin] = useState(true);
  const [winnerIndex, setWinnerIndex] = useState(-1);
  const spinValue = useRef(new Animated.Value(0)).current;

  const data = [
    { option: 'Option 1', points: 50 },
    { option: 'Option 2', points: 100 },
    { option: 'Option 3', points: 200 },
    { option: 'Option 4', points: 500 },
  ];

  const handleSpin = () => {
    if (canSpin) {
      const spinDuration = 4000;
      const spinCount = 5; // Number of complete rotations
      const selectedValue = Math.floor(Math.random() * data.length); // Randomly select a value

      const toValue = spinCount * data.length + selectedValue;
      setCanSpin(false);

      Animated.timing(spinValue, {
        toValue,
        duration: spinDuration,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start(() => {
        const normalizedValue = toValue % data.length;
        setWinnerIndex(normalizedValue);
        Alert.alert('Spinny Wheel', `Congratulations! You won ${data[normalizedValue].points} Brownie Points!`);
        setCanSpin(true);
      });
    } else {
      Alert.alert('Spinny Wheel', 'You can spin again next week!');
    }
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.wheel, { transform: [{ rotate: spin }] }]}>
        {data.map((item, index) => (
          <View
            key={index}
            style={[styles.wheelSection, { backgroundColor: item.color || '#F76B8A' }]}
          >
            <Text style={styles.wheelText}>{item.points}</Text>
            <Text style={styles.wheelOption}>{item.option}</Text>
          </View>
        ))}
      </Animated.View>

      <TouchableOpacity style={styles.spinButton} onPress={handleSpin}>
        <MaterialCommunityIcons name="reload" size={30} color="#FFF" />
        <Text style={styles.spinButtonText}>Spin the Wheel</Text>
      </TouchableOpacity>

      <Text style={styles.infoText}>
        {canSpin ? 'You can spin the wheel once a week!' : 'Come back next week to spin again!'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  wheel: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: '#888',
    overflow: 'hidden',
  },
  wheelSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wheelText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  wheelOption: {
    fontSize: 18,
    color: '#FFF',
  },
  spinButton: {
    backgroundColor: '#F76B8A',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  spinButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#888',
  },
});

export default GamePage;
