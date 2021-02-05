import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store, store2 } from './redux/store';
import Counter123 from './src/components/Counter';
import User from './src/components/User';

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Counter123></Counter123>
        <User></User>
      </Provider>
      <Provider store={store2}>
        <Counter123></Counter123>
        <User></User>
      </Provider>
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
