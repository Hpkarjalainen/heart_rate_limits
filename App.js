import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';



export default function App() {

  const [age, setAge] = useState('')
  const [bmi, setBmi] = useState(0)

  const calculation = () => {
    const result
  }
  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput
        placeholder='Click here to enter your age for calculation' />
      <Text>Heart rate limits:</Text>
      <Text>{bmi}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
