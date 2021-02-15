import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import { colors } from '../styles/colors'


const UserHeader = ({ text }) => {
    console.log('Entrou')
    return (
        <View style={{ padding: 30, backgroundColor: colors.secondary }}>
            <Text>{text}</Text>
        </View>
    )
}

export default UserHeader