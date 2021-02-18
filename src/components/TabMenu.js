import React from 'react'
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Thumbnail,
} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { colors } from '../styles/colors'
import { styles } from '../styles'
import { texts } from '../styles/texts'
import Logo from "../../assets/Logo/logoNosPrecos.svg"
import Menu from "../../assets/Icons/menu.svg"
import UserDefault from "../../assets/Icons/userDefault.svg"
const Drawer = createDrawerNavigator()


import {
    HeaderTitle,
    HeaderLeft,
    HeaderRight,
    Header,
} from './Header'
import {
    UserInfo,
} from './UserInfo'
export const TabMenu = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Header navigation={navigation} />
            <UserInfo />

        </View>
    )
}