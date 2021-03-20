import * as React from 'react';
import { View, Text, ImageBackground, StatusBar, Image, Switch, ActivityIndicator } from 'react-native';
import { estilo } from '../../estilos/estiloCadastroLogin';
import { Formik } from 'formik'
import * as Yup from 'yup'
import { string } from 'yup/lib/locale';
import { CampoInput, CampoSenha } from '../../componentes/input';
import { Button } from 'react-native-elements';


export interface CadastroScreenProps {
}

export function CadastroScreen(props: CadastroScreenProps) {

    const cadastrar = async (dados: any) => {
        await new Promise(r => setTimeout(() => r(''), 3000))
        console.log('Cadastrado com sucesso!')
        console.log(dados)
    }

    const [habilitado, setHabilitado] = React.useState(false)
    const alternar = () => {
        setHabilitado(!habilitado)
    }

    return (
        <ImageBackground source={require('./../../assets/imagens/papel-de-fundo.jpg')} style={estilo.fundo} >
            <StatusBar />

            <View style={estilo.conteiner}>
                <Image source={require('./../../assets/imagens/logo.png')} style={estilo.logo} />

                <Formik
                    initialValues={{ nome: '', cpf: '', email: '', telefone: '', senha: '' }}
                    validationSchema={Yup.object().shape({
                        nome: Yup.string().required('(Nome obrigatório)').min(5, '(Nome completo)').max(20, 'Máximo 20 caracteres'),
                        cpf: Yup.string().required('(CPF obrigatório)').min(9, '(Mínimo 11 caracteres)').max(14, 'Máximo 14 caracteres'),
                        email: Yup.string().required('(Email obrigatório)').email('(Email inválido)').max(50, '(Máximo 50 caracteres)'),
                        telefone: Yup.string().required('(Telefone obrigatório)').min(5, '(Mínimo 5 caracteres)').max(20, '(Máximo 20 caracteres)'),
                        senha: Yup.string().required('(Senha obrigatória)').min(8, '(Mínimo 8 caracteres)').max(15, '(Máximo 15 caracteres)')
                    })}
                    onSubmit={cadastrar}>

                    {({ handleChange, handleSubmit, isSubmitting, errors, touched, handleBlur }) => (
                        <View style={estilo.formulario}>
                            <CampoInput 
                                placeholder='Digite seu nome completo' 
                                iconeEsquerda='text' 
                                tipoIcone='entypo' 
                                onChangeText={handleChange('nome')}
                                onBlur={() => handleBlur} 
                            />
                            {touched.nome && <Text style={estilo.mensagemValidacao}>{errors.nome}</Text>}

                            <CampoInput 
                                placeholder='Digite seu CPF' 
                                iconeEsquerda='person' 
                                tipoIcone='ionicons'
                                tipoTeclado='numeric'
                                onChangeText={handleChange('cpf')}
                            />
                            {touched.cpf && <Text style={estilo.mensagemValidacao}>{errors.cpf}</Text>}
                            
                            <CampoInput 
                                placeholder='Digite seu email' 
                                iconeEsquerda='email' 
                                tipoTeclado='email-address'
                                onChangeText={handleChange('email')} 
                            />
                            {touched .email && <Text style={estilo.mensagemValidacao}>{errors.email}</Text>}

                            <CampoInput 
                                placeholder='Digite seu número de telefone' 
                                iconeEsquerda='telephone' 
                                tipoIcone='foundation' 
                                tipoTeclado='numeric'
                                onChangeText={handleChange('telefone')} 
                            />
                            {touched.telefone && <Text style={estilo.mensagemValidacao}>{errors.telefone}</Text>}

                            <CampoSenha 
                                placeholder='Digite sua senha' 
                                habilitado={habilitado}
                                onChangeText={handleChange('senha')}
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
                            {!isSubmitting && <Button title='Cadastrar' onPress={() => handleSubmit()} buttonStyle={estilo.botao} />}
                            
                            <Text style={estilo.linkNavegacao}>Já possui conta?</Text>
                        </View>
                    )}

                </Formik>
            </View>
        </ImageBackground>
    );
}