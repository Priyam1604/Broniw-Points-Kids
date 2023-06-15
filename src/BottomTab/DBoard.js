import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Homepage = () => {
  const navigation = useNavigation();
  const tasks = [
    {
      name: 'Feed the Dog',
      icon: 'paw-outline',
      progress: 40,
      points: 50,
    },
    {
      name: 'Clean the Room',
      icon: 'bed-outline',
      progress: 80,
      points: 30,
    },
    {
      name: 'Finish Homework',
      icon: 'book-outline',
      progress: 10,
      points: 100,
    },
    {
      name: 'Laundry',
      icon: 'shirt-outline',
      progress: 20,
      points: 40,
    },
    {
      name: 'Empty Dishwasher',
      icon: 'restaurant-outline',
      progress: 60,
      points: 20,
    },
    {
      name: 'Dog Walk',
      icon: 'paw-outline',
      progress: 90,
      points: 60,
    },
  ];

  const handleEarnButtonPress = () => {
    // Handle earn button press
    navigation.navigate('DigitalWallet');
  };

  const handleProfilePhotoUpdate = () => {
    // Handle profile photo update
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Hello John!</Text>
          <TouchableOpacity style={styles.profilePhotoContainer} onPress={handleProfilePhotoUpdate}>
            <Image source={require('./p2.png')} style={styles.profilePhoto} />
          </TouchableOpacity>
        </View>

        <View style={styles.tasksContainer}>
          {tasks.map((task, index) => (
            <View style={styles.taskItem} key={index}>
              <Ionicons name={task.icon} size={24} color="#F76B8A" style={styles.taskIcon} />
              <View style={styles.taskContent}>
                <Text style={styles.taskName}>{task.name}</Text>
                <Text style={styles.taskProgress}>{task.progress}% Done</Text>
                <Text style={styles.taskPoints}>Points: {task.points}</Text>
              </View>
              <TouchableOpacity style={styles.earnButton} onPress={handleEarnButtonPress}>
                <Text style={styles.earnButtonText}>Earn</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.bottomNavigation}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('AddReward')}>
          <FontAwesome5 name="gift" size={24} color="#F76B8A" />
          <Text style={styles.navText}>Reward</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('DBoard')}>
          <Ionicons name="home-outline" size={24} color="#888" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('RewardOptions')}>
          <Ionicons name="game-controller-outline" size={24} color="#888" />
          <Text style={styles.navText}>Game</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#888" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F76B8A',
  },
  profilePhotoContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  profilePhoto: {
    width: 50,
    height: 50,
  },
  tasksContainer: {
    flex: 1,
    marginTop:70,
    marginBottom: 60,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  taskIcon: {
    marginRight: 10,
  },
  taskContent: {
    flex: 1,
  },
  taskName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  taskProgress: {
    fontSize: 12,
    color: '#888',
  },
  taskPoints: {
    fontSize: 12,
  },
  earnButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#F76B8A',
  },
  earnButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
