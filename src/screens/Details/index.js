import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


const DetailsScreen = ({ route }) => {
  const { task } = route.params || {};

  if (!task) {
    return (
      <View style={
        styles.mainContainer}>
        <Text style={styles.title}>Task Not Found</Text>
      </View>
    );
  }

  return (
    <View style={
      styles.mainContainer}>
      <Text style={styles.title}>Task Details</Text>
      <View style={
        styles.container}>
        <Text style={styles.label}>Task Name:</Text>
        <Text style={styles.text}>{task.text}</Text>
      </View>
    </View>
  );
};

export default DetailsScreen;
