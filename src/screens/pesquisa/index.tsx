import * as React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons'
import { Cartao } from '../../componentes/cartao';

export interface PesquisaScreenProps {

}

export function PesquisaScreen(props: PesquisaScreenProps) {

  return (
    <View style={estilo.fundo}>
      <StatusBar />

      <Input
        inputContainerStyle={estilo.conteinerInput}
        placeholder='Pesquisar camisa'
        inputStyle={estilo.input}
        rightIcon={() => <FontAwesome name='search' size={20} color='black' />}
      />

      <ScrollView>
        <View style={estilo.conteinerProdutos}>

          <Cartao 
            cartao={{
              imagem: require('./../../assets/imagens/camisas/times-brasileiros/camisa-sao-paulo1.jpg'),
              titulo: 'Camisa São Paulo I 21/22 s/n° Torcedor Adidas Masculina - Branco+Vermelho',
              preco: 299.88
            }} 
          />
          <Cartao 
            cartao={{
              imagem: require('./../../assets/imagens/camisas/times-brasileiros/camisa-sao-paulo1.jpg'),
              titulo: 'Camisa São Paulo I 21/22 s/n° Torcedor Adidas Masculina - Branco+Vermelho',
              preco: 299.99
            }} 
          />

        </View>
      </ScrollView>

    </View>
  );
}

const estilo = StyleSheet.create({
  fundo: {
    backgroundColor: '#9fb8ad',
    flex: 1
  },
  conteinerInput: {
    backgroundColor: '#fff',
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 0,
    paddingRight: 20,
    paddingLeft: 25,
    marginBottom: -10
  },
  input: {
    fontSize: 15
  },
  conteinerProdutos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    flexWrap: 'wrap'
  }
});