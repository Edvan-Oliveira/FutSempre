import * as React from 'react';
import { StatusBar, StyleSheet, ScrollView } from 'react-native';
import { Categoria } from './componentes/categoria';
import { useNavigation } from '@react-navigation/core';

export interface CategoriasScreeenProps {
}

export function CategoriasScreeen(props: CategoriasScreeenProps) {
  const navegacao = useNavigation()

  return (
    <ScrollView style={estilo.fundo}>
      <StatusBar />
      <Categoria titulo='Camisas retrô' navegacao={() => navegacao.navigate('home')} />
      <Categoria titulo='Camisas masculinas' />
      <Categoria titulo='Camisas femininas' />
      <Categoria titulo='Times brasileiros' />
      <Categoria titulo='Seleções' />
      <Categoria titulo='Times europeus' />
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  fundo: {
    backgroundColor: '#9fb8ad',
    flex: 1
  }
});