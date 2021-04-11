import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ModeloCartao } from '../modelos/cartao';

export interface CartaoProps {
    cartao: ModeloCartao,
    estiloProduto?: any
}

export function Cartao(props: CartaoProps) {
    return (
        <View style={[estilo.produto, props.estiloProduto]}>
            <Image
                style={estilo.imagemCamisa}
                source={props.cartao.imagem}
            />

            <View style={estilo.conteinerTituloPreco}>
                <Text style={estilo.titulo}>{props.cartao.titulo}</Text>
                <Text style={estilo.preco}>R$ {props.cartao.preco}</Text>
            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    produto: {
        backgroundColor: 'rgba(58,99,81,0.6)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 280,
        width: 168,
        borderColor: '#1e6f5c',
        borderWidth: 1,
        marginBottom: 20
    },
    imagemCamisa: {
        height: '60%',
        width: '93%',
        marginTop: 6
    },
    conteinerTituloPreco: {
        width: '100%',
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column'
    },
    titulo: {
        color: '#dde',
        marginRight: 5,
        marginLeft: 5,
        fontSize: 13,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    preco: {
        fontWeight: 'bold',
        color: '#eee',
        paddingTop: 8,
        marginRight: 10,
        marginLeft: 10,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 5
    }
});