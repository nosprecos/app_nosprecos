import React from 'react'
import {
    View,
    Text,
    Button,
    TouchableOpacity,
} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { colors } from '../styles/colors'
import { styles } from '../styles'
import { texts } from '../styles/texts'
import Logo from "../../assets/Logo/logoNosPrecos.svg"
import Menu from "../../assets/Icons/menu.svg"
import UserDefault from "../../assets/Icons/userDefault.svg"
const Drawer = createDrawerNavigator()

export const TabMenu = () => {
    return (    
    <View style={styles.container}>
    <Text style={texts.subtitleLight}>
        Nome: Luan Santos de Souza
    </Text>
    <Text style={texts.subtitleLight}>
        Username: luansds
    </Text>
    <Text style={texts.subtitleLight}>
        Email: luzinZika1997@gmail.com
    </Text>

</View>
    )
}