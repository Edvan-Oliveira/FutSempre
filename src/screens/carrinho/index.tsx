import * as React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';

export interface CarrinhoScreenProps {
}

export function CarrinhoScreen(props: CarrinhoScreenProps) {
    return (
        <View style={estilo.fundo}>
            <StatusBar />

            <View style={estilo.conteiner}>
                <View style={estilo.cabecalho}>
                    <Image source={require('./../../assets/imagens/carrinho.png')} style={estilo.carrinho} />
                    <Text style={estilo.textoCarrinho}>Meu Carrinho</Text>
                </View>

                <View style={estilo.produto}>

                    <View style={estilo.imagemPreco}>
                        <Image style={estilo.imagemProduto}
                            source={require('./../../assets/imagens/camisas/camisa-sao-paulo.jpg')} />
                        <Text style={estilo.textoProduto}>R$ 20,50</Text>
                    </View>
                    <View style={estilo.detalhesProduto}>
                        <Text style={estilo.tituloProduto}>Camisa do São Paulo 2021</Text>

                        <View style={estilo.conteinerResumoDescricao}>
                            <Text style={estilo.resumoDescricao}>
                                De São Paulo tens o nome! Há 30 anos, Tele Santana...
                            </Text>
                        </View>

                        <View style={estilo.conteinerQuantidade}>
                            <Text style={estilo.textoProduto} >QUANTIDADE:</Text>
                            <View style={estilo.quantidadeProduto}>
                                <Button icon={{ name: 'minuscircleo', type: 'antdesign', color: '#fff' }} buttonStyle={estilo.botaoQuantidade} />
                                <Text style={estilo.textoProduto}>5</Text>
                                <Button icon={{ name: 'pluscircleo', type: 'antdesign', color: '#fff' }} buttonStyle={estilo.botaoQuantidade} />
                            </View>
                        </View>

                    </View>
                </View>
                <View style={estilo.produto}>

                    <View style={estilo.imagemPreco}>
                        <Image style={estilo.imagemProduto}
                            source={require('./../../assets/imagens/camisas/camisa-sao-paulo.jpg')} />
                        <Text style={estilo.textoProduto}>R$ 20,50</Text>
                    </View>
                    <View style={estilo.detalhesProduto}>
                        <Text style={estilo.tituloProduto}>Camisa do São Paulo 2021</Text>

                        <View style={estilo.conteinerResumoDescricao}>
                            <Text style={estilo.resumoDescricao}>
                                De São Paulo tens o nome! Há 30 anos, Tele Santana...
                            </Text>
                        </View>

                        <View style={estilo.conteinerQuantidade}>
                            <Text style={estilo.textoProduto} >QUANTIDADE:</Text>
                            <View style={estilo.quantidadeProduto}>
                                <Button icon={{ name: 'minuscircleo', type: 'antdesign', color: '#fff' }} buttonStyle={estilo.botaoQuantidade} />
                                <Text style={estilo.textoProduto}>5</Text>
                                <Button icon={{ name: 'pluscircleo', type: 'antdesign', color: '#fff' }} buttonStyle={estilo.botaoQuantidade} />
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
    cabecalho: {
        height: 75,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(58,99,81,1)',
        width: '100%'
    },
    carrinho: {
        height: 40,
        width: 40,
        marginRight: 10
    },
    textoCarrinho: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    resumoDescricao: {
        color: '#fff'
    },
    conteinerResumoDescricao: {
        width: 200
    },
    produto: {
        backgroundColor: 'rgba(58,99,81,0.6)',
        height: 190,
        width: '90%',
        borderRadius: 20,
        borderTopRightRadius: 0,
        marginTop: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: 10,
        position: 'relative'
    },
    botaoRemover: {
        position: 'absolute',
        top: -6,
        right: -11
    },
    textoProduto: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    imagemPreco: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagemProduto: {
        height: 110,
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
    },
    conteinerQuantidade: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingBottom: 5
    },
    tituloProduto: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20
    },
    botaoQuantidade: {
        width: 50,
        backgroundColor: 'rgba(0,0,0,0)'
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
        paddingBottom: 10,
        paddingTop: 10
    },
    textoValorTotal: {
        color: '#222831',
        fontSize: 23,
        fontWeight: 'bold'
    },
    botaoComprar: {
        borderRadius: 20,
        backgroundColor: '#af2d2d',
        padding: 20
    }
});