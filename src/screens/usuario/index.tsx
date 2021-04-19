import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import { CampoUsuario } from './componentes';
import * as ImagePicker from 'expo-image-picker'

export interface UsuarioScreenProps {
}

export function UsuarioScreen(props: UsuarioScreenProps) {

  const usuario = {
    nome: 'Edvan Oliveira',
    cpf: '11111111111',
    email: 'teste@teste.com',
    telefone: '8299964578',
    senha: '123456'
  }

  let logado: boolean = true
  const navegacao = useNavigation()
  const [foto, setFoto] = React.useState<string>('')
  const [fotoEnviada, setFotoEnviada] = React.useState<boolean>(false)


  const adicionarFoto = async () => {
    const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (permissao.granted) {
      const imagem = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        base64: true,
        quality: 0.3,
        mediaTypes: ImagePicker.MediaTypeOptions.Images
      })
      if (!imagem.cancelled) {
        const extensaoImagem = imagem.uri.split('.').pop()
        setFoto('data:image/' + extensaoImagem + ';base64,' + imagem.base64)
        setFotoEnviada(true)
      }
    } else {
      console.log('Permissão negada!')
    }
  }

  return (
    <View style={estilo.fundo}>
      <StatusBar />

      {!logado && <View style={estilo.conteiner}>
        <Text style={estilo.titulo}>Bem vindo!</Text>
        <Text style={estilo.texto}>Abaixo você pode criar uma conta ou se cadastrar caso não tenha uma.</Text>
        <View style={estilo.conteinerBotoes}>
          <Button title='Cadastre-se' buttonStyle={estilo.botoes} titleStyle={{ color: '#f4f3f3' }} onPress={() => navegacao.navigate('cadastro')} />
          <Button title='Login' buttonStyle={estilo.botoes} titleStyle={{ color: '#f4f3f3' }} onPress={() => navegacao.navigate('login')} />
        </View>
      </View>}

      { logado && <View style={estilo.conteinerLogado}>

        <TouchableOpacity onPress={adicionarFoto}>
          {!fotoEnviada && <Image source={require('./../../assets/imagens/foto-usuario.png')} style={estilo.foto} />}
          {fotoEnviada && <Image source={{ uri: foto }} style={estilo.foto} />}
        </TouchableOpacity>

        <CampoUsuario valor={usuario.nome} desabilitado />
        <CampoUsuario valor={usuario.cpf} desabilitado />
        <CampoUsuario valor={usuario.email} desabilitado />
        <CampoUsuario valor={usuario.telefone} desabilitado />
        <CampoUsuario valor={usuario.senha} senha desabilitado />

        <View style={estilo.salvarEditar}>
          <Button
            buttonStyle={[estilo.botaoSalvar, {backgroundColor: '#45526c'}]} title='Editar'
            icon={<AntDesign name='edit' color='#eee' size={17} />}
            titleStyle={estilo.tituloBotao} onPress={() => console.log('editar')}
          />
          <Button
            buttonStyle={[estilo.botaoSalvar, {backgroundColor: '#aa2b1d'}]} title='Salvar'
            icon={<AntDesign name='save' color='#eee' size={17} />}
            titleStyle={estilo.tituloBotao} onPress={() => console.log('salvar')}
          />
        </View>

      </View>}
    </View>
  );
}

const estilo = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#9fb8ad'
  },
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  },
  conteinerLogado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  foto: {
    height: 120,
    width: 120,
    marginBottom: 30,
    borderRadius: 70
  },
  inputConteinerStyle: {
    borderBottomWidth: 0,
    backgroundColor: '#2f5d62',
    borderRadius: 10,
    height: '100%'
  },
  campo: {
    display: 'flex',
    width: '95%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14
  },
  input: {
    color: '#fff',
    textAlign: 'center'
  },
  nomeInput: {
    color: '#244245',
    fontSize: 16,
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginBottom: 1,
    fontWeight: 'bold'
  },
  inputConteiner: {
    width: '100%',
    height: 45
  },
  salvarEditar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
    marginTop: -10
  },
  botaoSalvar: {
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: '#af2d2d',
    padding: 11,
    width: 110
  },
  tituloBotao: {
    marginLeft: 5,
    fontSize: 15,
    color: '#ddd'
  }
});
