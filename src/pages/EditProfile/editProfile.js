import React, { useState, useRef } from 'react'
import { styles } from '../../styles'
import { colors } from '../../styles/colors'
import { texts } from '../../styles/texts'
import ImageInput from '../../components/ImageInput'
import { Header } from '../../components/Header'
import { UserInfo } from '../../components/UserInfo'
import { ButtonAction } from '../../components/ButtonAction'
import { ModalCustom, ModalInput } from '../../components/ModalCustom'
import Warning from '../../../assets/Icons/warning.svg'
import Whatsapp from '../../../assets/Icons/whatsapp.svg'
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
    Alert,
    Modal,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'


import api from '../../api'
export default function EditProfile() {
    const navigation = useNavigation()
    const { user, setUser } = useUser()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [whatsapp, setWhatsapp] = useState()
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
    const [errorWhatsapp, setErrorWhatsapp] = useState(false)
    const [errorNewPassword, setErrorNewPassword] = useState(false)
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false)

    //warnnings
    const [warningName, setWarningName] = useState(false)
    const [warningEmail, setWarningEmail] = useState(false)
    const [warningUsername, setWarningUsername] = useState(false)
    const [warningPassword, setWarningPassword] = useState(false)
    const [warningWhatsapp, setWarningWhatsapp] = useState(false)
    const [warningNewPassword, setWarningNewPassword] = useState(false)
    const [warningConfirmPassword, setWarningConfirmPassword] = useState(false)

    //modals
    const [modalState, setModalState] = useState(false)
    const [modalUpdateState, setModalUpdateState] = useState(false)
    const [modalDeleteState, setModalDeleteState] = useState(false)

    //Refs to inputs
    const refInputName = useRef(0)
    const refInputEmail = useRef(1)
    const refInputUsername = useRef(2)
    const refInputPassword = useRef(3)
    const refInputConfirmPassword = useRef(4)

    async function removeUser(userId, userPassword) {
        console.log(userPassword)
        await api.post(`/customer/remove/${userId}`, {
            userPassword: userPassword,
        })
            .then(response => {
                console.log('Conta exluida com Sucesso')
                setModalState(!modalState)
            })
            .catch(error => {
                console.log(error.response.data)
                setError(true)
                setErrorMsg(error.response.data)
            })


    }

    async function updateUser(userRealName, userEmailAddress, userLoginName, userWhatsAppUrl, userPassword, userNewPassword, userConfirmPassword) {

        console.log({
            userRealName,
            userEmailAddress,
            userLoginName,
            userWhatsAppUrl,
            userPassword,
            userNewPassword,
            userConfirmPassword
        })
        const newUser = await api.put(`/customer/update/${user._id}`, {
            userRealName,
            userEmailAddress,
            userLoginName,
            userWhatsAppUrl,
            userPassword,
            userNewPassword,
            userConfirmPassword
        })
            .then(response => {
                console.log(response.data)
                setUser(response.data)

                navigation.navigate('Profile')
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
    /* async function updateImage(userImage) {
        const formData = new FormData()
        formData.append('picture', userImage)
        console.log(formData)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const newImage = await api.post(`/customer/update/photo/${user._id}`,
            formData,
            config).then(response => {
            
                setUserImage(response.data)
            })
            .catch(error => {
                console.log(error.response.data)

                //validation of error on front-end
                setErrorMsg(error.response.data)
                setError(true)
                return error
            })
    } */
    return (

        <View style={[styles.container, { paddingBottom: 10 }]}>
            <ScrollView>
                <Header navigation={navigation}
                />
                <UserInfo user={user}
                    edit={true}
                    userImage={userImage}
                    setUserImage={setUserImage}
                />

                <View style={styles.signIn}>

                    <ModalCustom
                        title={'Conta Excluída. :('}
                        subtitle={'Já queremos você de volta!'}
                        action={() => {
                            setModalState(!modalState)
                            navigation.navigate('Signin')
                        }}
                        textAction={'Ok'}
                        state={modalState}
                    />
                    <ModalInput
                        title={'Deseja realmente excluir?'}
                        subtitle={'Confirme com a senha!'}
                        actionConfirm={() => {
                            setModalDeleteState(!modalDeleteState)
                            removeUser(user._id, password)
                        }}
                        textActionConfirm={'Excluir'}
                        actionDismiss={() => {
                            setModalDeleteState(!modalDeleteState)
                        }}
                        value={password}
                        setValue={setPassword}
                        textActionDismiss={'Cancelar'}
                        state={modalDeleteState}
                        icon={require("../../../assets/Icons/password.png")}
                    />
                    <ModalInput
                        title={'Deseja realmente alterar?'}
                        subtitle={'Confirme com a senha!'}
                        actionConfirm={() => {
                            setModalUpdateState(!modalUpdateState)
                            updateUser(name, email, username, whatsapp, password, newPassword, confirmPassword)
                        }}
                        textActionConfirm={'Alterar'}
                        actionDismiss={() => {
                            setModalUpdateState(!modalUpdateState)
                        }}
                        value={password}
                        setValue={setPassword}
                        textActionDismiss={'Cancelar'}
                        state={modalUpdateState}
                        icon={require("../../../assets/Icons/password.png")}
                    />
                    <Text style={texts.subtitleSecondary}>Editar perfil</Text>

                    <Text style={styles.labels}>
                        Nome:
                    </Text>
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
                            placeholder={user.userRealName}
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
                    <Text style={styles.labels}>
                        E-mail:
                    </Text>
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
                            placeholder={user.userEmailAddress}
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
                    <Text style={styles.labels}>
                        Usuário:
                    </Text>
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
                            placeholder={user.userLoginName}
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
                    <Text style={styles.labels}>
                        Whatsapp:
                    </Text>
                    <View style={styles.input}>
                        <View style={styles.imageInput}>
                            <Whatsapp
                                width={'100%'}
                                height={'100%'}
                                fill={colors.light}
                            />
                        </View>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={text => {
                                onChangeValidation('whatsapp', text, setWhatsapp, setErrorWhatsapp, setWarningWhatsapp)
                            }}
                            textContentType={"telephoneNumber"}
                            autoCapitalize={'none'}
                            value={whatsapp}
                            onSubmitEditing={() => {
                                inputValidation('whatsapp', whatsapp, setErrorWhatsapp, setWarningWhatsapp)
                            }}
                            placeholder={user.userWhatsAppUrl}
                            placeholderTextColor={colors.secondary}
                        />
                        {errorWhatsapp &&
                            <Error
                                style={styles.imageInput}
                                fill={colors.error}
                            />
                        }
                        {warningWhatsapp &&
                            <Warning
                                style={styles.imageInput}
                                fill={colors.tertiary}
                            />
                        }
                    </View>
                    <View style={styles.editPassword}>
                        <Text style={styles.textInput}>
                            Trocar Senha
                        </Text>
                        <View style={styles.input}>
                            <Image style={styles.imageInput}
                                source={require("../../../assets/Icons/password.png")} />
                            <TextInput
                                ref={refInputPassword}
                                style={styles.textInput}
                                onChangeText={text => {
                                    onChangeValidation('password', text, setNewPassword, setErrorNewPassword, setWarningNewPassword)
                                }}
                                value={newPassword}
                                textContentType={"password"}
                                autoCapitalize={'none'}
                                selectTextOnFocus={true}
                                placeholder={'Nova Senha'}
                                onSubmitEditing={() => {
                                    inputValidation('password', newPassword, setErrorNewPassword, setWarningNewPassword, refInputConfirmPassword)
                                }}
                                secureTextEntry={true}
                                placeholderTextColor={colors.secondary}
                            />
                            {errorNewPassword &&
                                <Error
                                    style={styles.imageInput}
                                    fill={colors.error}
                                />
                            }
                            {warningNewPassword &&
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

                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { setModalUpdateState(!modalUpdateState) }}
                    >
                        <Text style={styles.subtitleLight}>
                            Atualizar
                        </Text>
                    </TouchableOpacity>

                    <ButtonAction
                        title={"Excluir Conta"}
                        action={() => {
                            setModalDeleteState(!modalDeleteState)
                        }}
                        color={colors.error}
                    />

                </View>

            </ScrollView>
        </View>


    )
}
