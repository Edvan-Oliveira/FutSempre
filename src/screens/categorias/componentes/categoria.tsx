import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface CategoriaProps {
  titulo: string
  navegacao?(): void
}

export function Categoria(props: CategoriaProps) {
  return (
    <TouchableOpacity onPress={props.navegacao}>
      <View style={estilo.opcao}>
        <Text style={estilo.textoCategoria}>{props.titulo}</Text>
        <Entypo name='chevron-right' size={20} />
      </View>
    </TouchableOpacity>
  );
}

const estilo = StyleSheet.create({
  opcao: {
    backgroundColor: '#f7f3e9',
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
    borderBottomColor: '#184d47',
    borderBottomWidth: 1
  },
  textoCategoria: {
    color: '#3f3f44',
    fontSize: 18
  }
});