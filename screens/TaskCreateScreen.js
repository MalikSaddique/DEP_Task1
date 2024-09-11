import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { addTask } from '../database';

const TaskCreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [category, setCategory] = useState('');
  const [reminder, setReminder] = useState('');

  const handleCreateTask = () => {
    addTask(title, description, dueDate.toDateString(), category, reminder);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Title" style={styles.input} value={title} onChangeText={setTitle} />
      <TextInput placeholder="Description" style={styles.input} value={description} onChangeText={setDescription} multiline />
      <DateTimePicker value={dueDate} mode="date" display="default" onChange={(event, date) => setDueDate(date)} />
      <TextInput placeholder="Category" style={styles.input} value={category} onChangeText={setCategory} />
      <TextInput placeholder="Reminder" style={styles.input} value={reminder} onChangeText={setReminder} />
      <TouchableOpacity style={styles.createButton} onPress={handleCreateTask}>
        <Text style={styles.buttonText}>Create Task</Text>
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
  createButton: {
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

export default TaskCreateScreen;
