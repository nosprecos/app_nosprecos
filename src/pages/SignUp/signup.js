import React, {useState} from 'react';
import {styles} from '../../styles'
import {colors} from '../../styles/colors'
import Logo from "../../../assets/Logo/logoNosPrecos.svg";
import Tickets from '../../../assets/Logo/tickets.svg'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    useWindowDimensions,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

function Signup(){
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigation = useNavigation();

    function signin(){
        
        navigation.navigate('Signin');
    }

    function createUser(name, email, username, password, confirmPassword){
        const user = {
            name,
            email,
            username,
            password,
            confirmPassword
        }
        console.log(`${username} cadastrado!`)
        console.log(user)
        
    }
    return (

        <View style={styles.container}>
            <ScrollView
        >   
            <View style={styles.top}>
                <Tickets
                    width={'100%'}
                    height={'100%'}
                    style={styles.ticket}
                />
            </View> 
            <View 
                style={styles.logo}
            >
                <Logo
                    width={'100%'}
                    height={'100%'}
                />
            </View>
            <View style={styles.signIn}>
             <TextInput
                    style={styles.input}
                    onChangeText={text => setName(text)}
                    value={name}
                    placeholder={'Nome Completo'}
                    placeholderTextColor={colors.secondary}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholder={'Email'}
                    placeholderTextColor={colors.secondary}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setUsername(text)}
                    value={username}
                    placeholder={'Usuário'}
                    placeholderTextColor={colors.secondary}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    placeholder={'Senha'}
                    secureTextEntry={true}
                    placeholderTextColor={colors.secondary}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setConfirmPassword(text)}
                    value={confirmPassword}
                    placeholder={'Confirmar senha'}
                    secureTextEntry={true}
                    placeholderTextColor={colors.secondary}
                />
                <TouchableOpacity
                    style={styles.button}
                        onPress={() => createUser(name, email, username, password, confirmPassword)}
                    >
                        <Text style={styles.subtitleLight}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
                                
            </View>
            
        </ScrollView>
        </View>
        

    );
}

export default Signup;