import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  
  const [lower, setLower] = useState(0)
  const [upper, setUpper] = useState(0)

  const calculation = (text) => {
    if (text === '') {
      // Handle the case where the input is empty, e.g., set both lower and upper to empty strings or any default values you prefer.
      setLower(0);
      setUpper(0);
      return;
    }
  
    const ageValue = parseFloat(text);
  
    if (!isNaN(ageValue)) {
      const lowerResult = (220 - ageValue) * 0.65;
      const upperResult = (220 - ageValue) * 0.85;
      setLower(lowerResult.toFixed(0));
      setUpper(upperResult.toFixed(0));
    } else {
      // Handle invalid input here
      setLower('Please, give your age in numbers');
      setUpper('')
    }
  }
  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput
        placeholder='Click here to enter your age for calculation'
        keyboardType='decimal-pad'
        onChangeText={text => calculation(text)}
      />
      <Text>Heart rate limits:</Text>
      <Text>{lower} - {upper}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',
  },
});
