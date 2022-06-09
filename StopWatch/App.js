import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [customInterval, setCustomInterval] = useState();

  const startTimer = () => {
    setCustomInterval(
      setInterval(() => {
        changeTimer();
      }, 1000)
    );
  };

  const stopTimer = () => {
    if (customInterval) {
      clearInterval(customInterval);
    }
  };

  const clear = () => {
    stopTimer();
    setSeconds(0);
    setMinutes(0);
  };

  const changeTimer = () => {
    setSeconds((prevState) => {
      if (prevState + 1 == 60) {
        setMinutes(minutes + 1);
        return 0;
      }
      return prevState + 1;
    });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.textTimer}>
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </Text>
      <View>
        <Button title='Start' onPress={startTimer}/>
        <Button title='Stop' onPress={stopTimer}/>
        <Button title='Clear' onPress={clear}/>
      </View>
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
  textTimer: {
    fontSize: 50,
  }
});
