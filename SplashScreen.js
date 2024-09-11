import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('TaskList');
    }, 3000);  // Splash screen will appear for 3 seconds
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/todolist.png')} style={styles.logo} />
      <Text style={styles.text}>Welcome to To-Do List App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5DA3FA',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SplashScreen;
