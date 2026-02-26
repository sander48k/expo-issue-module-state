import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import MyModule from './modules/my-module';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center'}}>This App shows that changing state from a native module callback does not cause a screen update</Text>
      <Text>Count: {count}</Text>
      <Button
        title="Start Counter"
        onPress={() => {
          MyModule.startCounter((count) => {
            console.log('Counter value:', count);
            setCount(count);
            // uncommenting this setTimeout will cause the counter to update correctly
            // setTimeout(() => {
            //   setCount(count);
            // }, 0);
          });
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
