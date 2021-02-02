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

function Signin(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
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
                    onChangeText={text => setUsername(text)}
                    value={username}
                    placeholder={'Nome de Usuário'}
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
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => console.log('Entrou!')}
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
                    onPress={() => console.log('CADASTRAR!')}
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