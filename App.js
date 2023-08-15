import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import toDoListProgressCircle from './Progress_Bar';
import buttonPress from './Check_Box';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style ={styles.text}>To-Do List</Text>
      <StatusBar style="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
  },

  text: {
    fontWeight: 'bold',
    fontSize: 30,
  }
});
