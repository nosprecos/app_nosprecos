import React, { useState, useRef } from 'react'
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { styles } from '../../styles'
import { colors } from '../../styles/colors'
import { texts } from '../../styles/texts'
import { TabMenu } from '../../components/TabMenu';
const Drawer = createDrawerNavigator()
const Profile = (user) => {
    const userProfile = user.route.params
    console.log(userProfile)
    return (
    <Drawer.Navigator initialRouteName="TabMenu">
        <Drawer.Screen name="TabMenu" component={TabMenu} />
    </Drawer.Navigator> 
    )
}

export default Profile;