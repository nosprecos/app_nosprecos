import React, {useState, useRef} from 'react';
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
    
    // const Ref = useRef([]);
    function signin(){
        
        navigation.navigate('Signin');
    }

    /* function onTabClick(ref){
        ref.focus()
    }; */

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
                    // ref={1}
                    style={styles.input}
                    textContentType={"name"}
                    onChangeText={text => setName(text)}
                    value={name}
                    placeholder={'Nome Completo'}
                    placeholderTextColor={colors.secondary}
                    /* onSubmitEditing={() =>{onTabClick(2)}} */
                    inlineImageLeft='search-icon'
                />
                <TextInput
                    // ref={2}
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholder={'Email'}
                    keyboardType={'email-address'}
                    autoCapitalize={'none'}
                    placeholderTextColor={colors.secondary}
                    textContentType={"emailAddress"}
                />
                <TextInput
                    // ref={3}
                    style={styles.input}
                    onChangeText={text => setUsername(text)}
                    textContentType={"username"}
                    autoCapitalize={'none'}
                    value={username}
                    placeholder={'Usuário'}
                    placeholderTextColor={colors.secondary}
                    />
                <TextInput
                    // ref={4}
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    textContentType={"password"}
                    autoCapitalize={'none'}
                    //autoFocus={true}
                    selectTextOnFocus={true}
                    placeholder={'Senha'}
                    secureTextEntry={true}
                    placeholderTextColor={colors.secondary}
                />
                <TextInput
                    // ref={5}
                    style={styles.input}
                    onChangeText={text => setConfirmPassword(text)}
                    value={confirmPassword}
                    textContentType={"password"}
                    autoCapitalize={'none'}
                    placeholder={'Confirmar senha'}
                    selectTextOnFocus={true}
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