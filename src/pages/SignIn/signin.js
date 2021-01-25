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
} from 'react-native'

function Signin(){
    const [username, setUsername] = useState('Nome de Usuário')
    const [password, setPassword] = useState('••••••••')

    return (

        <View
        style={styles.container}
        >   
            <View style={styles.ticket}>
                <Tickets/>
            </View> 
            <View 
                style={styles.logo}
            >
                <Logo
                    width={250}
                    height={250}
                />
            </View>
            <View style={styles.signIn}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setUsername(text)}
                    value={username}
                    placeholderTextColor={colors.secondary}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
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
                    onPress={()=> console.log('Esqueceu sua senha?')}
                >
                    <Text style={styles.textBoldLight}>
                        Esqueceu sua senha?
                    </Text>
                </TouchableOpacity>
                                
            </View>            
            
        </View>
        

    );
}

export default Signin;