import * as React from 'react';
import { View, Text, StatusBar, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export interface HomeScreenProps {
}

export function HomeScreen(props: HomeScreenProps) {
  return (
    <View style={estilo.fundo}>
      <StatusBar />

      <View style={estilo.conteiner}>
        <Text style={estilo.textoRolagem}>Lançamentos</Text>
        <ScrollView style={estilo.conteinerRolagem} horizontal>
          <Image 
            style={estilo.imagemCamisa}
            source={require('./../../assets/imagens/camisas/times-brasileiros/camisa-sao-paulo1.jpg')} 
          />
        </ScrollView>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  fundo: {
    backgroundColor: '#9fb8ad',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  conteiner: {
    height: 200,
    marginTop: 20,
    width: '100%',
    paddingLeft: 20
  },
  textoRolagem: {
    fontSize: 20,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    color: '#fff',
    paddingBottom: 5
  },
  conteinerRolagem: {
    marginTop: 10
  },
  imagemCamisa: {
    height: 150,
    width: 130,
    borderRadius: 10,
    marginTop: 10
  }
});