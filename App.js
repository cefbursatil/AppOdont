import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View } from 'react-native';
import { List2 } from './Components/List/List2';
export default function App() {
  return (
    <View>
      <List2/>
      <StatusBar style="auto" />
    </View>
  );
}

