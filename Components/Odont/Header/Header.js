import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import colors from '../../../constants/colors';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>SANI Odontologos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === 'android' ? colors.primary : 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: Platform.OS === 'android' ? 'black' : colors.primary,
    fontSize: 22,
  }
});

export default Header;