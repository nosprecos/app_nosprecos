import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Button,
} from 'react-native'
import { colors } from '../styles/colors'
import { styles } from '../styles'
import UserDefault from "../../assets/Icons/userDefault.svg"
import Instagram from "../../assets/Icons/instagram.svg"
import Whatsapp from "../../assets/Icons/whatsapp.svg"
import Facebook from "../../assets/Icons/facebook.svg"
import { texts } from '../styles/texts'
import { color } from 'react-native-reanimated'
export const UserInfo = () => {
    return (
        <View>
            <View style={styles.userInfoBg}>

            </View>
            <View style={styles.userInfo}>


                <View style={styles.userInfoImage}>
                    <UserDefault
                        width={'100%'}
                        height={'100%'}
                        fill={colors.secondary}
                    />
                </View>
                <View style={styles.userInfoContent}>
                    <View style={styles.userInfoNames}>
                        <Text style={texts.subtitleLight}>
                            First Name
                        </Text>
                        <Text style={texts.textLight}>
                            Username
                        </Text>
                    </View>
                    <View style={styles.userInfoActions}>
                        <TouchableOpacity
                            style={[styles.userInfoButtons, {
                                backgroundColor: colors.light,
                            }]}
                            onPress={() => {
                                console.log('Editar perfil!')
                            }}
                        >
                            <Text

                            >
                                Editar Perfil
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userInfoButtons}
                            onPress={() => {
                                console.log('Wpp!')
                            }}
                        >
                            <Whatsapp
                                height={20}
                                width={20}
                                fill={colors.light}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userInfoButtons}
                            onPress={() => {
                                console.log('Face!')
                            }}
                        >
                            <Facebook
                                height={20}
                                width={20}
                                fill={colors.light}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userInfoButtons}
                            onPress={() => {
                                console.log('Insta')
                            }}
                        >
                            <Instagram
                                height={20}
                                width={20}
                                fill={colors.light}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}