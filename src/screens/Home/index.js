import React, { useState, useEffect } from 'react';
import { 
  View, 
  FlatList, 
  Alert, 
  ScrollView
} from 'react-native';

import styles from './styles';
import { saveTasks } from '../../utlis/saveTask';
import TaskItem from '../../component/allItem';
import AddTaskInput from '../../component/addInput';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      const savedTasks = await loadTasks();
      setTasks(savedTasks);
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (text) => {
    if (!text.trim()) {
      Alert.alert('Error', 'Task name cannot be empty!');
      return;
    }
    const newTask = { id: Date.now().toString(), text, completed: false };
    setTasks((prev) => [...prev, newTask]);
    setTaskText("");
  };



  const deleteTask = (id) => {
    Alert.alert('Delete Task', 'Are you sure you want to delete this task?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => {
          setTasks((prev) => prev.filter((task) => task.id !== id));
        },
      },
    ]);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.innerContainer}>
        <AddTaskInput
          taskText={taskText}
          onTaskTextChange={setTaskText}
          onAddTask={() => addTask(taskText)}
        />
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
      
              onDelete={() => deleteTask(item.id)}
              onPress={() => navigation.navigate('DetailsScreen', { task: item })}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
