import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native'
import {
    Header,
    HeaderTitle,
    HeaderLeft,
} from './Header'
import {
    UserInfoSideBar,
} from './UserInfo'
import { ButtonAction } from './ButtonAction'
import { colors } from '../styles/colors'
import { styles } from '../styles'
import { useNavigation } from '@react-navigation/native'
import Logo from "../../assets/Logo/logoNosPrecos.svg"
import Menu from "../../assets/Icons/menu.svg"
import UserDefault from "../../assets/Icons/userDefault.svg"
import { texts } from '../styles/texts'

export const SideBar = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderTitle />
            </View>
            <UserInfoSideBar />
            <View style={{
                padding: 20,
                height: Dimensions.get('window').height * 0.7,
                flexDirection: 'column',

            }}>
                <View>
                    <ButtonAction
                        title={'Anúncios'}
                        action={() => console.log('Anúncios')}
                    />
                </View>

                <View style={{
                    marginTop: Dimensions.get('window').height * 0.02,
                }}>
                    <ButtonAction
                        title={'Notificações'}
                        action={() => console.log('Notificações')}
                    />
                </View>
                <View style={{
                    justifyContent: 'flex-end',
                    flex: 1,
                    paddingBottom: Dimensions.get('window').height * 0.02,
                }}>
                    <ButtonAction
                        title={'Sair'}
                        action={() => {
                            console.log('Saiu!')
                            navigation.navigate('Signin')
                        }}
                    />
                </View>


            </View>
        </View>

    )
}