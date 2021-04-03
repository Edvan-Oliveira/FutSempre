import * as React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import {  AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface CarrinhoScreenProps {
}

export function CarrinhoScreen(props: CarrinhoScreenProps) {
    return (
        <View style={estilo.fundo}>
            <StatusBar />

            <View style={estilo.conteiner}>
                <View style={estilo.produto}>

                    <View style={estilo.imagemPreco}>
                        <Image style={estilo.imagemProduto}
                            source={require('./../../assets/imagens/camisas/camisa-sao-paulo1.jpg')} />
                        <Text style={estilo.textoPreco}>R$ 20,50</Text>
                    </View>
                    <View style={estilo.detalhesProduto}>
                        <Text style={estilo.tituloProduto}>Camisa do São Paulo 2021</Text>

                        <View style={estilo.conteinerResumoDescricao}>
                            <Text style={estilo.resumoDescricao}>
                                De São Paulo tens o nome! Há 30 anos, Tele Santana...
                            </Text>
                        </View>

                        <View style={estilo.conteinerQuantidade}>
                            <Text style={estilo.textoQuantidade} >QUANTIDADE:</Text>
                            <View style={estilo.quantidadeProduto}>
                                <TouchableOpacity>
                                    <AntDesign name='minuscircle' size={20} color='#fff' />
                                </TouchableOpacity> 
                                
                                <Text style={estilo.numeroQuantidade}>5</Text>

                                <TouchableOpacity>
                                    <AntDesign name='pluscircle' size={20} color='#fff' />
                                </TouchableOpacity> 
                            </View>
                        </View>

                    </View>
                </View>
     
                <View style={estilo.produto}>

                    <View style={estilo.imagemPreco}>
                        <Image style={estilo.imagemProduto}
                            source={require('./../../assets/imagens/camisas/camisa-sao-paulo1.jpg')} />
                        <Text style={estilo.textoPreco}>R$ 20,50</Text>
                    </View>
                    <View style={estilo.detalhesProduto}>
                        <Text style={estilo.tituloProduto}>Camisa do São Paulo 2021</Text>

                        <View style={estilo.conteinerResumoDescricao}>
                            <Text style={estilo.resumoDescricao}>
                                De São Paulo tens o nome! Há 30 anos, Tele Santana...
                            </Text>
                        </View>

                        <View style={estilo.conteinerQuantidade}>
                            <Text style={estilo.textoQuantidade} >QUANTIDADE:</Text>
                            <View style={estilo.quantidadeProduto}>
                                <TouchableOpacity>
                                    <AntDesign name='minuscircle' size={20} color='#fff' />
                                </TouchableOpacity> 
                                
                                <Text style={estilo.numeroQuantidade}>5</Text>

                                <TouchableOpacity>
                                    <AntDesign name='pluscircle' size={20} color='#fff' />
                                </TouchableOpacity> 
                            </View>
                        </View>

                    </View>
                </View>
     
                <View style={estilo.finalizarCompra}>
                    <Text style={estilo.textoValorTotal}>Total: R$ 41,00</Text>
                    <Button title='Finalizar Compra' buttonStyle={estilo.botaoComprar} titleStyle={{fontSize: 18}} />
                </View>
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
    carrinho: {
        height: 28,
        width: 28,
        marginRight: 15
    },
    textoCarrinho: {
        color: '#f7f7e8',
        fontSize: 20,
        fontWeight: '500'
    },
    resumoDescricao: {
        color: '#fff'
    },
    conteinerResumoDescricao: {
        width: 200
    },
    produto: {
        backgroundColor: 'rgba(58,99,81,0.6)',
        height: 170,
        width: '94%',
        borderRadius: 20,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: 10,
        borderColor: '#1e6f5c',
        borderWidth: 1.5
    },
    tituloProduto: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 15
    },
    botaoRemover: {
        position: 'absolute',
        top: -6,
        right: -11
    },
    textoPreco: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    imagemPreco: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagemProduto: {
        height: 100,
        width: 90,
        borderRadius: 10,
        marginBottom: 10
    },
    detalhesProduto: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    quantidadeProduto: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 12
    },
    textoQuantidade: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold'
    },
    numeroQuantidade: {
        color: '#fff',
        paddingRight: 6,
        paddingLeft: 6,
        paddingTop: 3,
        paddingBottom: 5,
        fontSize: 17,
        fontWeight: 'bold'
    },
    conteinerQuantidade: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingBottom: 5
    },
    finalizarCompra: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
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