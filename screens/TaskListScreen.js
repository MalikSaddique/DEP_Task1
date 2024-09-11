import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { getTasks, deleteTask } from '../database';

const TaskListScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks(setTasks);
  }, [tasks]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.taskCard} onPress={() => navigation.navigate('TaskDetail', { taskId: item.id })}>
      <Text style={styles.taskTitle}>{item.title}</Text>
      <Text style={styles.taskCategory}>{item.category}</Text>
      <Button title="Delete" onPress={() => deleteTask(item.id)} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList data={tasks} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('CreateTask')}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 20,
  },
  taskCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  taskCategory: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#5DA3FA',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  addButtonText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TaskListScreen;
