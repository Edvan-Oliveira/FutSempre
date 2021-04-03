import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export interface UsuarioScreenProps {
}

export function UsuarioScreen (props: UsuarioScreenProps) {

    const navegacao = useNavigation()

    return (
      <View style={estilo.conteiner}>
        <StatusBar />
        <Text style={estilo.titulo}>Bem vindo!</Text>
        <Text style={estilo.texto}>Abaixo você pode criar uma conta ou se cadastrar caso não tenha uma.</Text>
        
        <View style={estilo.conteinerBotoes}>
          <Button title='Cadastre-se' buttonStyle={estilo.botoes} titleStyle={{color: '#f4f3f3'}} onPress={() => navegacao.navigate('cadastro')} />
          <Button title='Login' buttonStyle={estilo.botoes} titleStyle={{color: '#f4f3f3'}} onPress={() => navegacao.navigate('login')} />
        </View>
      </View>
    );
}

const estilo = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9fb8ad'
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2f5d62'
  },
  texto: {
    fontSize: 15,
    margin: 20,
    marginLeft: 30,
    marginRight: 30,
    color: '#2f5d62',
    textAlign: 'center'
  },
  conteinerBotoes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
    marginTop: 20
  },
  botoes: {
    width: 120,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#2f5d62'
  }
});
