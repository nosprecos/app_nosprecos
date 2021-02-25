import React, { useState, useRef } from 'react'
import { styles } from '../../styles'
import { colors } from '../../styles/colors'
import { useUser } from '../../contexts/User'
import Logo from "../../../assets/Logo/logoNosPrecos.svg"
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
import Signup from '../SignUp/signup'
import api from '../../api'
import { texts } from '../../styles/texts';
import { ButtonAction } from '../../components/ButtonAction';
import { inputValidation, onChangeValidation } from '../../utils/inputValidations'
import Warning from '../../../assets/Icons/warning.svg'
import Error from '../../../assets/Icons/error.svg'
function Signin() {
    const [username, setUsername] = useState('gesin')
    const [password, setPassword] = useState('euMeAmo1@')
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const navigation = useNavigation();
    const refInputPassword = useRef(0)
    const { user, setUser } = useUser()

    const [errorUsername, setErrorUsername] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)

    const [warningUsername, setWarningUsername] = useState(false)
    const [warningPassword, setWarningPassword] = useState(false)

    function goToSignup() {
        navigation.navigate('Signup');
    }
    function goToProfile(userValid) {
        setUser(userValid)
        console.log(`${userValid.userLoginName} logando...`)
        navigation.navigate('RoutesContent')
    }

    async function verifyUser(userLogin, userPassword) {

        const userValid = await api.post('/signin', {
            userLogin,
            userPassword
        })
            .then(response => {
                const userResponse = response.data
                // setUser(userResponse)

                goToProfile(userResponse)
                return response.data
            })
            .catch(error => {
                console.log(error.response.data)

                //validation of error on front-end
                setErrorMsg(error.response.data)
                setError(true)
                return error
            })
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
                            source={require("../../../assets/Icons/user.png")} />
                        <TextInput
                            style={styles.textInput}
                            onChangeText={text => {
                                onChangeValidation('username', text, setUsername, setErrorUsername, setWarningUsername)
                            }}
                            textContentType={"username"}
                            autoCapitalize={'none'}
                            value={username}
                            onSubmitEditing={() => {
                                inputValidation('username', username, setErrorUsername, setWarningUsername, refInputPassword)
                            }}
                            placeholder={'Usuário'}
                            placeholderTextColor={colors.secondary}
                        />
                        {errorUsername &&
                            <Error
                                style={styles.imageInput}
                                fill={colors.error}
                            />
                        }
                        {warningUsername &&
                            <Warning
                                style={styles.imageInput}
                                fill={colors.tertiary}
                            />
                        }
                    </View>


                    <View style={styles.input}>
                        <Image style={styles.imageInput}
                            source={require("../../../assets/Icons/password.png")} />
                        <TextInput
                            ref={refInputPassword}
                            style={styles.textInput}
                            onChangeText={text => {
                                onChangeValidation('password', text, setPassword, setErrorPassword, setWarningPassword)
                            }}
                            value={password}
                            textContentType={"password"}
                            autoCapitalize={'none'}
                            selectTextOnFocus={true}
                            placeholder={'Senha'}
                            onSubmitEditing={() => {
                                inputValidation('password', password, setErrorPassword, setWarningPassword, refInputConfirmPassword)
                            }}
                            secureTextEntry={true}
                            placeholderTextColor={colors.secondary}
                        />
                        {errorPassword &&
                            <Error
                                style={styles.imageInput}
                                fill={colors.error}
                            />
                        }
                        {warningPassword &&
                            <Warning
                                style={styles.imageInput}
                                fill={colors.tertiary}
                            />
                        }
                    </View>




                    <ButtonAction
                        title={'Entrar'}
                        action={() => verifyUser(username, password)}
                        username={username}
                        password={password}
                    />
                    {/* <TouchableOpacity
                        style={styles.button}s
                        onPress={() => {
                            verifyUser(username, password)
                        }}
                    >
                        <Text style={styles.subtitleLight}>
                            Entrar
                    </Text>
                    </TouchableOpacity> */}
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