import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import { colors } from '../styles/colors'
import { styles } from '../styles'
import { useNavigation } from '@react-navigation/native'
//import Logo from "../../assets/Logo/logoNosPrecos.svg"
import Logo from "../../assets/Logo/logoNosPrecosSecondary.svg"
import Menu from "../../assets/Icons/menu.svg"
import UserDefault from "../../assets/Icons/userDefault.svg"
import { UserImage } from './UserImage'
import { color } from 'react-native-reanimated'

export const HeaderTitle = () => {
    return (
        <View style={styles.headerLogo}>
            <Logo
                height={'100%'}
                width={'100%'}
            />
        </View>
    )
}
export const HeaderLeft = ({ navigation }) => {
    return (
        <TouchableOpacity
            style={styles.headerMenu}
            onPress={() => {
                navigation.toggleDrawer()
            }}
        >
            <Menu
                height={'100%'}
                width={'100%'}
                fill={colors.light}
            />
        </TouchableOpacity>
    )
}
export const HeaderRight = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            style={styles.headerUser}
            onPress={() => {
                navigation.navigate('Profile')
            }}
        >
            <UserImage
                fill={colors.light}
            />
        </TouchableOpacity>
    )
}
export const Header = ({ navigation }) => {
    return (
        <View style={styles.header}>
            <HeaderLeft navigation={navigation} />
            <HeaderTitle />
            <HeaderRight />
        </View>
    )
}