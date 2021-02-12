import React, { useState, useRef } from 'react'
import { styles } from '../../styles'
import { colors } from '../../styles/colors'
import Logo from "../../../assets/Logo/logoNosPrecos.svg"
import Tickets from '../../../assets/Logo/tickets.svg'
import Warning from '../../../assets/Icons/warning.svg'
import Error from '../../../assets/Icons/error.svg'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions,
    useWindowDimensions,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { set } from 'react-native-reanimated'

function Signup() {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigation = useNavigation();
    //errors
    const [errorName, setErrorName] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorUsername, setErrorUsername] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false)

    //warnnings
    const [warningName, setWarningName] = useState(false)
    const [warningEmail, setWarningEmail] = useState(false)
    const [warningUsername, setWarningUsername] = useState(false)
    const [warningPassword, setWarningPassword] = useState(false)
    const [warningConfirmPassword, setWarningConfirmPassword] = useState(false)
    // const [ref, setRef] = useState([1,2,3,4,5])

    const inputRef = useRef(0)
    const inputRef1 = useRef(1)
    const inputRef2 = useRef(2)
    const inputRef3 = useRef(3)
    const inputRef4 = useRef(4)

    function isNotSpecialCharacter(password) {
        if (password.indexOf('!') == -1 && password.indexOf('@') == -1 && password.indexOf('#') == -1 && password.indexOf('$') == -1 && password.indexOf('%') == -1 && password.indexOf('&') == -1 && password.indexOf('*') == -1) {
            return true
        } else {
            return false
        }
    }

    function signin() {

        navigation.navigate('Signin')
    }
    //lembrar de mudar para 60
    function onTabClick(name) {
        if (name.length > 60) {
            setErrorName(true)
            setWarningName(false)
        } else {
            setErrorName(false)
        }
        inputRef.current.focus()
    }

    function onTabClick1(email) {
        if (email.indexOf('@') == -1 || email.length == 1) {
            setErrorEmail(true)
            setWarningEmail(false)
        } else {
            setErrorEmail(false)
        }

        inputRef1.current.focus()
    }

    function onTabClick2(username) {

        if (username.length < 5 || username.length > 30) {
            setErrorUsername(true)
            setWarningUsername(false)
        } else {
            setErrorUsername(false)
        }
        inputRef2.current.focus()
    }

    function onTabClick3(password) {

        if (password.length < 8 || password.length > 60) {
            setErrorPassword(true)
            setWarningPassword(false)
        } else if (password.toLowerCase() == password) {
            setErrorPassword(true)
            setWarningPassword(false)
        } else if (password.toUpperCase() == password) {
            setErrorPassword(true)
            setWarningPassword(false)
        } else if (regex.test(password) == false) {
            setErrorPassword(true)
            setWarningPassword(false)
        } else if (isNotSpecialCharacter(password)) {
            setErrorPassword(true)
            setWarningPassword(false)
        } else {
            setErrorPassword(false)
        }

        inputRef3.current.focus()
    }
    function onTabClick4(confirmPassword) {
        if (confirmPassword != password) {
            setErrorConfirmPassword(true)
            setWarningConfirmPassword(false)
        } else {
            setErrorConfirmPassword(false)
        }
    }


    function createUser(name, email, username, password, confirmPassword) {
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
            <ScrollView>

                <View style={styles.top}>
                    <Tickets
                        width={'100%'}
                        height={'100%'}
                        style={styles.ticket}
                    />
                </View>

                <View style={styles.logo}>
                    <Logo
                        width={'100%'}
                        height={'100%'}
                    />
                </View>

                <View style={styles.signIn}>

                    <View style={styles.input}>
                        <Image style={styles.imageInput}
                            source={require("../../../assets/Icons/name.png")} />
                        <TextInput
                            style={styles.textInput}
                            textContentType={"name"}
                            onChangeText={text => {
                                setName(text)
                                setErrorName(false)
                                if (text.length > 60) {

                                    setWarningName(true)
                                } else {
                                    setWarningName(false)
                                }
                                if (text.length == 0) {
                                    setWarningName(false)
                                    setErrorName(false)
                                }
                            }}
                            value={name}
                            placeholder={'Nome Completo'}
                            placeholderTextColor={colors.secondary}
                            onSubmitEditing={() => { onTabClick(name) }}
                        />
                        {errorName &&
                            <Error
                                style={styles.imageInput}
                                fill={colors.error}
                            />
                        }
                        {warningName &&
                            <Warning
                                style={styles.imageInput}
                                fill={colors.tertiary}
                            />
                        }

                    </View>
                    <View style={styles.input}>
                        <Image style={styles.imageInput}

                            source={require("../../../assets/Icons/email.png")} />
                        <TextInput
                            ref={inputRef}
                            style={styles.textInput}
                            onChangeText={text => {
                                setEmail(text)
                                setErrorEmail(false)
                                if (text.indexOf('@') == -1) {
                                    setWarningEmail(true)
                                } else {
                                    setWarningEmail(false)
                                }
                                if (text.length == 0) {
                                    setWarningEmail(false)
                                    setErrorEmail(false)
                                }
                            }}
                            value={email}
                            placeholder={'Email'}
                            keyboardType={'email-address'}
                            autoCapitalize={'none'}
                            onSubmitEditing={() => onTabClick1(email)}
                            placeholderTextColor={colors.secondary}
                            textContentType={"emailAddress"}
                        />
                        {errorEmail &&
                            <Error
                                style={styles.imageInput}
                                fill={colors.error}
                            />
                        }
                        {warningEmail &&
                            <Warning
                                style={styles.imageInput}
                                fill={colors.tertiary}
                            />
                        }
                    </View>
                    <View style={styles.input}>
                        <Image style={styles.imageInput}
                            source={require("../../../assets/Icons/user.png")} />
                        <TextInput
                            ref={inputRef1}
                            style={styles.textInput}
                            onChangeText={text => {
                                setUsername(text)
                                setErrorUsername(false)
                                if (text.length < 5 || text.length > 30) {
                                    setWarningUsername(true)
                                } else {
                                    setWarningUsername(false)
                                }

                                if (text.length == 0) {
                                    setWarningUsername(false)
                                    setErrorUsername(false)
                                }
                            }}
                            textContentType={"username"}
                            autoCapitalize={'none'}
                            value={username}
                            onSubmitEditing={() => onTabClick2(username)}
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
                            ref={inputRef2}
                            style={styles.textInput}
                            onChangeText={text => {
                                setPassword(text)
                                const regex = /[0-9]/;
                                setErrorPassword(false)
                                if (text.length < 8 || text.length > 60) {
                                    setWarningPassword(true)
                                } else if (text.toLowerCase() == text) {
                                    setWarningPassword(true)
                                } else if (text.toUpperCase() == text) {
                                    setWarningPassword(true)
                                } else if (regex.test(text) == false) {
                                    setWarningPassword(true)
                                } else if (isNotSpecialCharacter(text)) {
                                    setWarningPassword(true)
                                } else {
                                    setWarningPassword(false)
                                }
                                if (text.length == 0) {
                                    setWarningPassword(false)
                                    setErrorPassword(false)
                                }
                            }}
                            value={password}
                            textContentType={"password"}
                            autoCapitalize={'none'}
                            //autoFocus={true}
                            selectTextOnFocus={true}
                            placeholder={'Senha'}
                            onSubmitEditing={() => onTabClick3(password)}
                            //secureTextEntry={true}
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

                    <View style={styles.input}>
                        <Image style={styles.imageInput}
                            source={require("../../../assets/Icons/confirmPassword.png")} />
                        <TextInput
                            ref={inputRef3}
                            style={styles.textInput}
                            onChangeText={text => {
                                setConfirmPassword(text)
                                setErrorConfirmPassword(false)
                                if (text != password) {
                                    setWarningConfirmPassword(true)

                                } else {
                                    setWarningConfirmPassword(false)
                                }

                                if (text.length == 0) {
                                    setWarningConfirmPassword(false)
                                    setErrorConfirmPassword(false)
                                }
                            }}
                            value={confirmPassword}
                            textContentType={"password"}
                            autoCapitalize={'none'}
                            placeholder={'Confirmar senha'}
                            selectTextOnFocus={true}
                            onSubmitEditing={() => {
                                onTabClick4(confirmPassword)

                            }}
                            secureTextEntry={true}
                            placeholderTextColor={colors.secondary}
                        />
                        {errorConfirmPassword &&
                            <Error
                                style={styles.imageInput}
                                fill={colors.error}
                            />
                        }
                        {warningConfirmPassword &&
                            <Warning
                                style={styles.imageInput}
                                fill={colors.tertiary}
                            />
                        }
                    </View>



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