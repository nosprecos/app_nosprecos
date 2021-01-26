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
} from 'react-native'

function Signin(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    console.log(Dimensions)
    return (

        <ScrollView
        contentContainerStyle={styles.container}
        >   
            <View style={styles.ticket}>
                <Tickets
                    width={'100%'}
                    height={150}
                />
            </View> 
            <View 
                style={styles.logo}
            >
                <Logo
                    width={'75%'}
                    height={150}
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
                    onPress={()=> console.log('Esqueceu sua senha?')}
                >
                    <Text style={styles.textBoldLight}>
                        Esqueceu sua senha?
                    </Text>
                </TouchableOpacity>
                
                                
            </View> 
            <TouchableOpacity
                    style={styles.textButton}
                    onPress={()=> console.log('CADASTRAR!')}
                >
                    <View style={{width: '100%', marginTop: 30}}>
                        <Text style={styles.textBoldLight}>
                            Não tem uma conta? <Text style={[styles.textBoldLight, {fontWeight: 'bold'}]}>
                            Crie agora!
                        </Text>                         
                        </Text>
                        

                    </View>   
                    
                </TouchableOpacity>         
            
        </ScrollView>
        

    );
}

export default Signin;