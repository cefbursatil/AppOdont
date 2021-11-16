import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text } from 'react-native';
import { Sani } from './screens/Sani';
export default function App() {
  return (
    <View>
      <Sani/>
      <StatusBar style="auto" />
    </View>
  );
}

