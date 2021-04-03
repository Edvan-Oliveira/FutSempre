import * as React from 'react';
import { View, Text, StatusBar, StyleSheet, Image } from 'react-native';
import { Input } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons'

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

      <View style={estilo.conteinerProdutos}>

        <View style={estilo.produto}>
          <Image
            style={estilo.imagemCamisa}
            source={require('./../../assets/imagens/camisas/camisa-sao-paulo1.jpg')}
          />

          <View style={estilo.conteinerTituloPreco}>
            <Text style={estilo.titulo}>
              Camisa São Paulo I 21/22 s/n° Torcedor Adidas Masculina - Branco+Vermelho
            </Text>
            <Text style={estilo.preco}>R$ 305,25</Text>
          </View>
        </View>
        
        <View style={estilo.produto}>
          <Image
            style={estilo.imagemCamisa}
            source={require('./../../assets/imagens/camisas/camisa-sao-paulo1.jpg')}
          />

          <View style={estilo.conteinerTituloPreco}>
            <Text style={estilo.titulo}>
              Camisa São Paulo I 21/22 s/n° Torcedor Adidas Masculina - Branco+Vermelho
            </Text>
            <Text style={estilo.preco}>R$ 305,25</Text>
          </View>
        </View>
        
        <View style={estilo.produto}>
          <Image
            style={estilo.imagemCamisa}
            source={require('./../../assets/imagens/camisas/camisa-sao-paulo1.jpg')}
          />

          <View style={estilo.conteinerTituloPreco}>
            <Text style={estilo.titulo}>
              Camisa São Paulo I 21/22 s/n° Torcedor Adidas Masculina - Branco+Vermelho
            </Text>
            <Text style={estilo.preco}>R$ 305,25</Text>
          </View>
        </View>
        
        <View style={estilo.produto}>
          <Image
            style={estilo.imagemCamisa}
            source={require('./../../assets/imagens/camisas/camisa-sao-paulo1.jpg')}
          />

          <View style={estilo.conteinerTituloPreco}>
            <Text style={estilo.titulo}>
              Camisa São Paulo I 21/22 s/n° Torcedor Adidas Masculina - Branco+Vermelho
            </Text>
            <Text style={estilo.preco}>R$ 305,25</Text>
          </View>
        </View>
        
      </View>


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
    paddingLeft: 25
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
  },
  produto: {
    backgroundColor: 'rgba(58,99,81,0.6)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 270,
    width: 170,
    borderRadius: 10,
    borderColor: '#1e6f5c',
    borderWidth: 1.5,
    marginBottom: 20
  },
  imagemCamisa: {
    height: 150,
    width: 130,
    borderRadius: 10,
    marginTop: 10
  },
  conteinerTituloPreco: {
    width: '100%',
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column'
  },
  titulo: {
    color: '#f8f1f1',
    marginRight: 5,
    marginLeft: 5,
    fontSize: 13,
    textAlign: 'center'
  },
  preco: {
    fontWeight: 'bold',
    color: '#f9f6f7',
    paddingTop: 8,
    marginRight: 10,
    marginLeft: 10,
    textAlign: 'center'
  }
});