import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CadastroScreen } from './src/screens/cadastro';
import LoginScreen from './src/screens/login';

export default function App() {
  return ( <CadastroScreen /> );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
