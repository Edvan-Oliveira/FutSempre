import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, StatusBar, ActivityIndicator, Switch } from 'react-native';
import { Button } from 'react-native-elements'
import { CampoInput, CampoSenha } from './../../componentes/input'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { estilo } from '../../estilos/estiloCadastroLogin';

export interface LoginScreenProps {
}

async function logar({ email, senha }: any) {

    await new Promise(r => setTimeout(() => r(''), 3000))

    if (email.trim() == 'edvan@email.com' && senha == 'senhaa') {
        console.log('logou')
    } else {
        console.log('errou')
    }
}

export default function LoginScreen(props: LoginScreenProps) {

    const [habilitado, setHabilitado] = React.useState(false)
    const alternar = () => {
        setHabilitado(!habilitado)
    }

    return (
        <ImageBackground source={require('./../../assets/imagens/papel-de-fundo.jpg')} style={estilo.fundo}>
            <StatusBar />

            <View style={estilo.conteiner}>
                <Image style={estilo.logo} source={require('./../../assets/imagens/logo.png')} />

                <Formik initialValues={{ email: '', senha: '' }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().required('(Email obrigatório)').email('(Email inválo)').max(50, '(Máximo 50 caracteres)'),
                        senha: Yup.string().required('(Senha obrigatória)').min(6, '(Mínimo 6 caracteres)').max(15, '(Máximo 15 caracteres)')
                    })}
                    onSubmit={logar} >

                    {({ handleChange, handleSubmit, isSubmitting, errors, touched, handleBlur }) => (
                        <View style={estilo.formulario}>

                            <CampoInput 
                                placeholder='Digite seu email' 
                                iconeEsquerda='email'
                                tipoTeclado='email-address'
                                onChangeText={handleChange('email')} 
                                onBlur={() => handleBlur} 
                            />
                            {touched.email && <Text style={estilo.mensagemValidacao} >{errors.email}</Text>}

                            <CampoSenha 
                                placeholder='Digite sua senha' 
                                onChangeText={handleChange('senha')} 
                                onBlur={() => handleBlur} 
                                habilitado={habilitado} 
                            />
                            {touched.senha && <Text style={estilo.mensagemValidacao}>{errors.senha}</Text>}

                            <View style={estilo.check}>
                                <Switch
                                    onValueChange={alternar}
                                    value={habilitado}
                                    trackColor={{ true: '#e6b566', false: '#bbbbbb' }}
                                    thumbColor={habilitado ? '#e6b566' : '#bbbbbb'}
                                />

                                <Text style={estilo.textoCheck}>Exibir senha</Text>
                            </View>

                            {isSubmitting && <ActivityIndicator color='#FFF' size={30} style={{margin: 5}} />}
                            {!isSubmitting && <Button title='Entrar'
                                onPress={() => handleSubmit()} buttonStyle={estilo.botao} />}

                            <Text style={estilo.linkNavegacao}>Não possui conta?</Text>
                        </View>
                    )}

                </Formik>
            </View>
        </ImageBackground>
    );
}
