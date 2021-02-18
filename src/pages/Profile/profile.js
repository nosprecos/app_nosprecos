import React from 'react'
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Thumbnail,
} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { colors } from '../../styles/colors'
import { styles } from '../../styles'
import { texts } from '../../styles/texts'
import Logo from "../../../assets/Logo/logoNosPrecos.svg"
import Menu from "../../../assets/Icons/menu.svg"
import UserDefault from "../../../assets/Icons/userDefault.svg"
import { useUser } from '../../contexts/User'




import {
    Header,
} from '../../components/Header'
import {
    UserInfo,
} from '../../components/UserInfo'

export const Profile = ({ navigation }) => {
    const { user } = useUser()
    console.log(user)
    return (
        <View style={styles.container}>

            <Header navigation={navigation} />
            <UserInfo user={user} />

        </View>
    )
}