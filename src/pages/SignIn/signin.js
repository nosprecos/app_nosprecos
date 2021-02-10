import React, {useState, useRef} from 'react'
import {styles} from '../../styles'
import {colors} from '../../styles/colors'
import Logo from "../../../assets/Logo/logoNosPrecos.svg";
import Tickets from '../../../assets/Logo/tickets.svg'
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Signup from '../SignUp/signup';
import api from '../../api'
function Signin(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(true)
    const navigation = useNavigation();
    const inputRef=useRef(0)

    function onTabVerification(text){
        

    }

    function onTabClick(){
        inputRef.current.focus()
    }

    function goToSignup(){
        navigation.navigate('Signup');
    } 

    async function verifyUser(userLogin, userPassword){

        console.log(userLogin)
        const response = await api.post('/signin',{
            params:{
                userLogin,
                userPassword
            }            
        })

        

        // if(response){
        //     console.log(response)
        // }
        return response
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
                <View style={styles.input}>
                    <Image style={styles.imageInput}
                        source={require("../../../assets/Icons/user.png")}/>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => setUsername(text)}
                        value={username}
                        placeholder={'Nome de Usuário'}
                        placeholderTextColor={colors.secondary}
                        onSubmitEditing={()=>{onTabVerification(username)}}
                />
                </View>
                
                
                <View style={styles.input}>
                    <Image style={styles.imageInput}
                            source={require("../../../assets/Icons/password.png")}/>
                    <TextInput
                        ref={inputRef}
                        style={styles.textInput}
                        onChangeText={text => setPassword(text)}
                        value={password}
                        placeholder={'Senha'}
                        secureTextEntry={true}
                        placeholderTextColor={colors.secondary}
                />
                </View>
                {error &&
                <View>
                    <Text style={styles.textError}>
                        [Error] Você digitou errado!
                    </Text>
                </View>
                }
                
                

                
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        console.log(username, password)
                        verifyUser(username, password)
                    }}
                >
                    <Text style={styles.subtitleLight}>
                        Entrar
                    </Text>
                </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.textButton}
                        onPress={() => console.log('Esqueceu sua senha?')}
                    >
                        <Text style={styles.textBoldLight}>
                            Esqueceu sua senha?
                        </Text>
                    </TouchableOpacity>
                                
            </View>
            <View style={styles.bottom}>
                
                
                <TouchableOpacity
                    style={styles.textButton}
                    onPress={() => goToSignup()}
                >

                    <Text style={[styles.textBoldLight, { alignItems: 'center' }]}>
                        Não tem uma conta?
                        </Text>
                    <Text style={[styles.textBoldLight, { fontWeight: 'bold' }]}>
                        Crie agora!
                        </Text>


                </TouchableOpacity>
                    
            </View>
        </ScrollView>
        </View>
        

    );
}

export default Signin;