import React from 'react';
import { StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Sani } from "../screens/Sani";
import { DetailOdont } from "../screens/DetailOdont";


const Stack = createNativeStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
      }}
      initialRouteName="Shop"
    >
      <Stack.Screen
        name="List"
        component={Sani}
        options={{
          title: 'Bienvenido a Sani',
          headerRight: () => <Notifications />
        }}
      />
      <Stack.Screen options={{ headerTintColor: 'black' }} name="Detail" component={DetailOdont} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS === 'android' ? COLORS.primary : 'white',
  }
})

export default Navigation;