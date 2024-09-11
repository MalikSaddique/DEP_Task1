import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { updateTask, getTasks } from '../database';

const TaskDetailScreen = ({ route, navigation }) => {
  const { taskId } = route.params;
  const [task, setTask] = useState({});
  const [dueDate, setDueDate] = useState(new Date());

  useEffect(() => {
    getTasks((tasks) => {
      const selectedTask = tasks.find(t => t.id === taskId);
      setTask(selectedTask);
      setDueDate(new Date(selectedTask.dueDate));
    });
  }, []);

  const handleUpdateTask = () => {
    updateTask(task.id, task.title, task.description, dueDate.toDateString(), task.category, task.reminder);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Title" style={styles.input} value={task.title} onChangeText={text => setTask({ ...task, title: text })} />
      <TextInput placeholder="Description" style={styles.input} value={task.description}
      onChangeText={text => setTask({ ...task, description: text })} multiline />
      <DateTimePicker value={dueDate} mode="date" display="default" onChange={(event, date) => setDueDate(date)} />
      <TextInput placeholder="Category" style={styles.input} value={task.category} onChangeText={text => setTask({ ...task, category: text })} />
      <TextInput placeholder="Reminder" style={styles.input} value={task.reminder} onChangeText={text => setTask({ ...task, reminder: text })} />
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdateTask}>
        <Text style={styles.buttonText}>Update Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    fontSize: 16,
    elevation: 3,
  },
  updateButton: {
    backgroundColor: '#5DA3FA',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TaskDetailScreen;

