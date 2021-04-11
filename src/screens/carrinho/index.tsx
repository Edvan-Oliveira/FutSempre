import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import { Moldura } from './componentes/moldura';

export interface CarrinhoScreenProps {
}

export function CarrinhoScreen(props: CarrinhoScreenProps) {

    return (
        <View style={estilo.fundo}>
            <StatusBar />
            
            <ScrollView>
                <View style={estilo.conteiner}>

                <Moldura 
                    modeloCarrinho={{
                        id: '1',
                        imagem: require('./../../assets/imagens/camisas/times-brasileiros/camisa-sao-paulo1.jpg'),
                        titulo: 'Camisa do São Paulo 2021',
                        resumo: 'De São Paulo tens o nome! Há 30 anos, Tele Santana...',
                        quantidade: 2,
                        preco: 305.99
                    }}
                />
                
                <Moldura 
                    modeloCarrinho={{
                        id: '1',
                        imagem: require('./../../assets/imagens/camisas/times-brasileiros/camisa-sao-paulo1.jpg'),
                        titulo: 'Camisa do São Paulo 2021',
                        resumo: 'De São Paulo tens o nome! Há 30 anos, Tele Santana...',
                        quantidade: 2,
                        preco: 305.99
                    }}
                />
                <Moldura 
                    modeloCarrinho={{
                        id: '1',
                        imagem: require('./../../assets/imagens/camisas/times-brasileiros/camisa-sao-paulo1.jpg'),
                        titulo: 'Camisa do São Paulo 2021',
                        resumo: 'De São Paulo tens o nome! Há 30 anos, Tele Santana...',
                        quantidade: 2,
                        preco: 305.99
                    }}
                />

                </View>
            </ScrollView>

            <View style={estilo.finalizarCompra}>
                <Text style={estilo.textoValorTotal}>Total: R$ 41,00</Text>
                <Button title='Finalizar Compra' buttonStyle={estilo.botaoComprar} titleStyle={{ fontSize: 18 }} />
            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    fundo: {
        height: '100%',
        width: '100%',
        backgroundColor: '#9fb8ad'
    },
    conteiner: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    finalizarCompra: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
        backgroundColor: '#dfdfdf',
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 11,
        paddingTop: 11
    },
    textoValorTotal: {
        color: '#222831',
        fontSize: 23,
        fontWeight: 'bold'
    },
    botaoComprar: {
        borderRadius: 20,
        backgroundColor: '#af2d2d',
        padding: 15
    }
});