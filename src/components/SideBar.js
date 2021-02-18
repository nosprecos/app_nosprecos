import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import {
    Header,
    HeaderTitle,
    HeaderLeft,
} from './Header'
import {
    UserInfoSideBar,
} from './UserInfo'
import { colors } from '../styles/colors'
import { styles } from '../styles'
import { useNavigation } from '@react-navigation/native'
import Logo from "../../assets/Logo/logoNosPrecos.svg"
import Menu from "../../assets/Icons/menu.svg"
import UserDefault from "../../assets/Icons/userDefault.svg"
import { texts } from '../styles/texts'

export const SideBar = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderTitle />
                <HeaderLeft navigation={navigation} />
            </View>
            <UserInfoSideBar />
        </View>

    )
}