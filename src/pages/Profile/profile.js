import React, { useState, useRef } from 'react'
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native'
import { styles } from '../../styles'
import { colors } from '../../styles/colors'
import { texts } from '../../styles/texts'
import { UserHeader } from '../../components/UserHeader'

const Profile = (user) => {
    const userProfile = user.route.params
    console.log(userProfile)
    return (
        <View style={styles.container}>
            <Text style={texts.subtitleLight}>
                Nome: {userProfile.userRealName}
            </Text>
            <Text style={texts.subtitleLight}>
                Username: {userProfile.userLoginName}
            </Text>
            <Text style={texts.subtitleLight}>
                Email: {userProfile.userEmailAddress}
            </Text>

        </View>
    )
}

export default Profile;