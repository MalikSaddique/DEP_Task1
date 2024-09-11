import AsyncStorage from '@react-native-async-storage/async-storage';

export const addTask = async (title, description, dueDate, category, reminder) => {
  try {
    const existingTasks = JSON.parse(await AsyncStorage.getItem('tasks')) || [];
    const newTask = { id: Date.now(), title, description, dueDate, category, reminder };
    const updatedTasks = [...existingTasks, newTask];
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  } catch (error) {
    console.log('Error adding task: ', error);
  }
};

export const getTasks = async (setTasks) => {
  try {
    const tasks = JSON.parse(await AsyncStorage.getItem('tasks')) || [];
    setTasks(tasks);
  } catch (error) {
    console.log('Error fetching tasks: ', error);
  }
};

export const deleteTask = async (id) => {
  try {
    const existingTasks = JSON.parse(await AsyncStorage.getItem('tasks')) || [];
    const updatedTasks = existingTasks.filter(task => task.id !== id);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  } catch (error) {
    console.log('Error deleting task: ', error);
  }
};

export const updateTask = async (id, title, description, dueDate, category, reminder) => {
  try {
    const existingTasks = JSON.parse(await AsyncStorage.getItem('tasks')) || [];
    const updatedTasks = existingTasks.map(task => 
      task.id === id ? { id, title, description, dueDate, category, reminder } : task
    );
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  } catch (error) {
    console.log('Error updating task: ', error);
  }
};
