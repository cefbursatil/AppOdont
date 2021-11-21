import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text } from 'react-native';
import { Sani } from './screens/Sani';
import Navigation from './Navigation/Navigation';
export default function App() {
  return (
    <View>
      <Navigation/>
      <StatusBar style="auto" />
    </View>
  );
}

