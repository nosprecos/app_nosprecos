import React, {useState, useRef} from 'react'
import {styles} from '../../styles'
import {colors} from '../../styles/colors'
import Logo from "../../../assets/Logo/logoNosPrecos.svg"
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
    // const [ref, setRef] = useState([1,2,3,4,5])
    
    const inputRef=useRef(0)
    const inputRef1=useRef(1)
    const inputRef2=useRef(2)
    const inputRef3=useRef(3)
    const inputRef4=useRef(4)
    
    
    function signin(){
        
        navigation.navigate('Signin')
    }

    function onTabClick(){
        inputRef.current.focus()
    }

    function onTabClick1(){
        inputRef1.current.focus()
    }

    function onTabClick2(){
        inputRef2.current.focus()
    }

    function onTabClick3(){
        inputRef3.current.focus()
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
                    textContentType={"name"}
                    onChangeText={text => setName(text)}
                    value={name}
                    placeholder={'Nome Completo'}
                    placeholderTextColor={colors.secondary}
                    onSubmitEditing={()=>{onTabClick()}}
                    inlineImageLeft='search-icon'
                />
                <TextInput
                    ref={inputRef}
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholder={'Email'}
                    keyboardType={'email-address'}
                    autoCapitalize={'none'}
                    onSubmitEditing={() => onTabClick1()}
                    placeholderTextColor={colors.secondary}
                    textContentType={"emailAddress"}
                />
                <TextInput
                    ref={inputRef1}
                    style={styles.input}
                    onChangeText={text => setUsername(text)}
                    textContentType={"username"}
                    autoCapitalize={'none'}
                    value={username}
                    onSubmitEditing={() => onTabClick2()}
                    placeholder={'Usuário'}
                    placeholderTextColor={colors.secondary}
                    />
                <TextInput
                    ref={inputRef2}
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    textContentType={"password"}
                    autoCapitalize={'none'}
                    //autoFocus={true}
                    selectTextOnFocus={true}
                    placeholder={'Senha'}
                    onSubmitEditing={() => onTabClick3()}
                    secureTextEntry={true}
                    placeholderTextColor={colors.secondary}
                />
                <TextInput
                    ref={inputRef3}
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
        

    )
}

export default Signup