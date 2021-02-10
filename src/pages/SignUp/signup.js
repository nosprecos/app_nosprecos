import React, { useState, useRef } from 'react'
import { styles } from '../../styles'
import { colors } from '../../styles/colors'
import Logo from "../../../assets/Logo/logoNosPrecos.svg"
import Tickets from '../../../assets/Logo/tickets.svg'
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
import api from '../../api'
function Signup() {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigation = useNavigation();
    // const [ref, setRef] = useState([1,2,3,4,5])

    const inputRef = useRef(0)
    const inputRef1 = useRef(1)
    const inputRef2 = useRef(2)
    const inputRef3 = useRef(3)
    const inputRef4 = useRef(4)


    function signin() {

        navigation.navigate('Signin')
    }

    function onTabClick() {
        inputRef.current.focus()
    }

    function onTabClick1() {
        inputRef1.current.focus()
    }

    function onTabClick2() {
        inputRef2.current.focus()
    }

    function onTabClick3() {
        inputRef3.current.focus()
    }

    async function createUser(userRealName, userEmailAddress, userLoginName, userPassword, userConfirmPassword) {

        const newUser = await api.post('/signup', {
            userRealName,
            userEmailAddress,
            userLoginName,
            userPassword,
            userConfirmPassword

        })
            .then(response => {
                console.log(response.data)
                navigation.navigate('Signin')
                return response.data
            })
            .catch(error => {
                console.log(error.response.data)

                //validation of error on front-end
                return error
            })

        return newUser
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
                            onChangeText={text => setName(text)}
                            value={name}
                            placeholder={'Nome Completo'}
                            placeholderTextColor={colors.secondary}
                            onSubmitEditing={() => { onTabClick() }}
                        />
                    </View>
                    <View style={styles.input}>
                        <Image style={styles.imageInput}
                            source={require("../../../assets/Icons/email.png")} />
                        <TextInput
                            ref={inputRef}
                            style={styles.textInput}
                            onChangeText={text => setEmail(text)}
                            value={email}
                            placeholder={'Email'}
                            keyboardType={'email-address'}
                            autoCapitalize={'none'}
                            onSubmitEditing={() => onTabClick1()}
                            placeholderTextColor={colors.secondary}
                            textContentType={"emailAddress"}
                        />
                    </View>
                    <View style={styles.input}>
                        <Image style={styles.imageInput}
                            source={require("../../../assets/Icons/user.png")} />
                        <TextInput
                            ref={inputRef1}
                            style={styles.textInput}
                            onChangeText={text => setUsername(text)}
                            textContentType={"username"}
                            autoCapitalize={'none'}
                            value={username}
                            onSubmitEditing={() => onTabClick2()}
                            placeholder={'Usuário'}
                            placeholderTextColor={colors.secondary}
                        />
                    </View>
                    <View style={styles.input}>
                        <Image style={styles.imageInput}
                            source={require("../../../assets/Icons/password.png")} />
                        <TextInput
                            ref={inputRef2}
                            style={styles.textInput}
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
                    </View>
                    <View style={styles.input}>
                        <Image style={styles.imageInput}
                            source={require("../../../assets/Icons/confirmPassword.png")} />
                        <TextInput
                            ref={inputRef3}
                            style={styles.textInput}
                            onChangeText={text => setConfirmPassword(text)}
                            value={confirmPassword}
                            textContentType={"password"}
                            autoCapitalize={'none'}
                            placeholder={'Confirmar senha'}
                            selectTextOnFocus={true}
                            secureTextEntry={true}
                            placeholderTextColor={colors.secondary}
                        />
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