import React, { useState, useRef } from 'react'
import { styles } from '../../styles'
import { colors } from '../../styles/colors'
import { texts } from '../../styles/texts'
import ImageInput from '../../components/ImageInput'
import { Header } from '../../components/Header'
import { UserInfo } from '../../components/UserInfo'
import Warning from '../../../assets/Icons/warning.svg'
import Error from '../../../assets/Icons/error.svg'
import FormData from 'form-data'
import { useUser } from '../../contexts/User'
import { inputValidation, onChangeValidation } from '../../utils/inputValidations'
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'


import api from '../../api'
export default function EditProfile() {
    const navigation = useNavigation()
    const { user, setUser } = useUser()
    const [username, setUsername] = useState()
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [newPassword, setNewPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [userImage, setUserImage] = useState()

    //errors
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
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


    //Refs to inputs
    const refInputName = useRef(0)
    const refInputEmail = useRef(1)
    const refInputUsername = useRef(2)
    const refInputPassword = useRef(3)
    const refInputConfirmPassword = useRef(4)


    async function updateUser(userRealName, userEmailAddress, userLoginName, userPassword, userImage) {


        const newUser = await api.put(`/customer/update/${user._id}`, {
            userRealName,
            userEmailAddress,
            userLoginName,
            userPassword,
        })
            .then(response => {
                console.log(response.data)
                navigation.navigate('Profile')
                setUser(response.data)
                return response.data
            })
            .catch(error => {
                console.log(error.response.data)

                //validation of error on front-end
                setErrorMsg(error.response.data)
                setError(true)
                return error
            })

        const formData = new FormData()
        formData.append('picture', userImage)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const newImage = await api.post(`/customer/update/photo/${user._id}`,
            formData,
            config).then(response => {
                console.log(response.data)
                //setUserImage(response.data)
            })
            .catch(error => {
                console.log(error.response.data)

                //validation of error on front-end
                //setErrorMsg(error.response.data)
                setError(true)
                return error
            })

        console.log(newImage)
        return newUser
    }

    return (

        <View style={styles.container}>
            <ScrollView>
                <Header navigation={navigation}
                />
                <UserInfo user={user}
                    edit={true}
                    userImage={userImage}
                    setUserImage={setUserImage}
                />
                <View style={styles.signIn}>

                    <View style={styles.input}>
                        <Image style={styles.imageInput}
                            source={require("../../../assets/Icons/name.png")} />
                        <TextInput
                            style={styles.textInput}
                            textContentType={"name"}
                            onChangeText={text => {
                                onChangeValidation('name', text, setName, setErrorName, setWarningName)
                            }}
                            ref={refInputName}
                            value={name}
                            placeholder={'Nome Completo'}
                            placeholderTextColor={colors.secondary}
                            onSubmitEditing={() => {
                                inputValidation('name', name, setErrorName, setWarningName, refInputEmail)
                            }}
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
                            ref={refInputEmail}
                            style={styles.textInput}
                            onChangeText={text => {
                                onChangeValidation('email', text, setEmail, setErrorEmail, setWarningEmail)
                            }}
                            value={email}
                            placeholder={'Email'}
                            keyboardType={'email-address'}
                            autoCapitalize={'none'}
                            onSubmitEditing={() => {
                                inputValidation('email', email, setErrorEmail, setWarningEmail, refInputUsername)
                            }}
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
                            ref={refInputUsername}
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

                    <View style={styles.input}>
                        <Image style={styles.imageInput}
                            source={require("../../../assets/Icons/confirmPassword.png")} />
                        <TextInput
                            ref={refInputConfirmPassword}
                            style={styles.textInput}
                            onChangeText={text => {
                                onChangeValidation('confirmPassword', text, setConfirmPassword, setErrorConfirmPassword, setWarningConfirmPassword)
                            }}
                            value={confirmPassword}
                            textContentType={"password"}
                            autoCapitalize={'none'}
                            placeholder={'Confirmar senha'}
                            selectTextOnFocus={true}
                            onSubmitEditing={() => {
                                inputValidation('confirmPassword', confirmPassword, setErrorConfirmPassword, setWarningConfirmPassword, refInputConfirmPassword, password)
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
                    {error &&
                        <View>
                            <Text style={texts.textWarning}>
                                {errorMsg}
                            </Text>
                        </View>
                    }


                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => updateUser(name, email, username, password, newPassword, userImage)}
                    >
                        <Text style={styles.subtitleLight}>
                            Atualizar
                        </Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </View>


    )
}
