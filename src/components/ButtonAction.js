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
    Header,
} from './Header'
import {
    UserInfo,
} from './UserInfo'
export const ButtonAction = ({title, action, color}) => {
    if (!color) color = colors.secondary
    return (
        <TouchableOpacity
            style={[styles.button,{backgroundColor: color}]}
            onPress={action}
        >
            <Text style={styles.subtitleLight}>
                {title}
                        </Text>
        </TouchableOpacity>
    )
}

