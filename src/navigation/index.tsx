import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { CadastroScreen } from '../screens/cadastro'
import LoginScreen from '../screens/login'
import { NavegacaoHome } from './home'

const Stack = createStackNavigator()

export const NavegacaoPrincipal = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='app'>
            <Stack.Screen name='cadastro' component={CadastroScreen} />
            <Stack.Screen name='login' component={LoginScreen} />
            <Stack.Screen name='app' component={NavegacaoHome} />
        </Stack.Navigator>
    </NavigationContainer>
)

