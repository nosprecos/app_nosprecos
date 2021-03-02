import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    Modal,
    Image,
} from 'react-native'
import { colors } from '../styles/colors'
import { styles } from '../styles'
import { texts } from '../styles/texts'
import { ButtonAction } from './ButtonAction'
import { inputValidation, onChangeValidation } from '../utils/inputValidations'
import Warning from '../../assets/Icons/warning.svg'
import Error from '../../assets/Icons/error.svg'
export const ModalCustom = ({ title, subtitle, textAction, action, state }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={state}
        >
            <View style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0, 0.5)',
                padding: 50,
                justifyContent: 'center',
                alignContent: 'center',

            }}>
                <View style={{
                    backgroundColor: colors.secondaryDark,
                    padding: 30,
                    borderRadius: 30,
                }}>
                    <Text style={styles.textBoldLight}>
                        {title}
                    </Text>
                    <Text style={styles.textLight}>
                        {subtitle}
                    </Text>
                    <ButtonAction
                        title={textAction}
                        action={action}
                    />
                </View>
            </View>
        </Modal>
    )
}

export const ModalInput = ({
    title,
    subtitle,
    textActionConfirm,
    actionConfirm,
    textActionDismiss,
    actionDismiss,
    value,
    setValue,
    state,
    icon,
}) => {
    const [errorInput, setErrorInput] = useState(false)
    const [warningInput, setWarningInput] = useState(false)
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={state}
        >
            <View style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0, 0.5)',
                padding: 50,
                justifyContent: 'center',
                alignContent: 'center',

            }}>
                <View style={{
                    backgroundColor: colors.secondaryDark,
                    padding: 30,
                    borderRadius: 30,
                }}>
                    <Text style={styles.textBoldLight}>
                        {title}
                    </Text>
                    <Text style={styles.textLight}>
                        {subtitle}
                    </Text>
                    <View style={[styles.input, { marginTop: 20 }]}>
                        <Image style={styles.imageInput}
                            source={icon} />
                        <TextInput
                            style={styles.textInput}
                            onChangeText={text => {
                                onChangeValidation('password', text, setValue, setErrorInput, setWarningInput)
                            }}
                            value={value}
                            textContentType={"password"}
                            autoCapitalize={'none'}
                            selectTextOnFocus={true}
                            placeholder={'Digite a senha'}
                            onSubmitEditing={() => {
                                inputValidation('password', value, setErrorInput, setWarningInput)
                            }}
                            secureTextEntry={true}
                            placeholderTextColor={colors.secondary}
                        />
                        {errorInput &&
                            <Error
                                style={styles.imageInput}
                                fill={colors.error}
                            />
                        }
                        {warningInput &&
                            <Warning
                                style={styles.imageInput}
                                fill={colors.tertiary}
                            />
                        }
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <View>
                            <ButtonAction
                                title={textActionDismiss}
                                action={actionDismiss}
                                color={colors.secondaryDark}
                            />
                        </View>
                        <View>
                            <ButtonAction
                                title={textActionConfirm}
                                action={actionConfirm}
                            />
                        </View>


                    </View>
                </View>
            </View>
        </Modal>
    )
}

