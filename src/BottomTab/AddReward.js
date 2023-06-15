import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RewardPage = () => {
  const navigation = useNavigation();

  const rewards = [
    {
      name: 'School Bag',
      icon: 'school',
      date: 'May 1, 2023',
    },
    {
      name: 'Nike Shoes',
      icon: 'running',
      date: 'April 15, 2023',
    },
    {
      name: 'Football',
      icon: 'football-ball',
      date: 'March 27, 2023',
    },
    {
      name: 'Pencil Case',
      icon: 'pencil-alt',
      date: 'February 10, 2023',
    },
    {
      name: 'Video Games',
      icon: 'gamepad',
      date: 'January 5, 2023',
    },
    // Add more rewards as needed
  ];

  const renderRewardItem = ({ item }) => (
    <View style={styles.rewardItem}>
      <FontAwesome5 name={item.icon} size={24} color="#F76B8A" style={styles.rewardIcon} />
      <View style={styles.rewardContent}>
        <Text style={styles.rewardName}>{item.name}</Text>
        <Text style={styles.rewardDate}>Achieved on {item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rewards Achieved</Text>
      <FlatList
        data={rewards}
        renderItem={renderRewardItem}
        keyExtractor={(item) => item.name}
        style={styles.rewardList}
        contentContainerStyle={styles.rewardListContent}
      />
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('AddReward')}>
          <FontAwesome5 name="gift" size={24} color="#F76B8A" />
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

export default RewardPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#F76B8A',
    textAlign: 'center',
    marginTop: 40,
  },
  rewardList: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  rewardListContent: {
    paddingBottom: 20,
  },
  rewardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  rewardIcon: {
    marginRight: 10,
  },
  rewardContent: {
    flex: 1,
  },
  rewardName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  rewardDate: {
    fontSize: 12,
    color: '#888',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
    paddingHorizontal: 20,
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
