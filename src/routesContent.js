import React, { useState, useRef } from 'react'
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native'

import {
    HeaderTitle,
    HeaderLeft,
    HeaderRight
} from './components/Header'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {Profile} from './pages/Profile/profile'

const Drawer = createDrawerNavigator()
const RoutesContent = (userValid) => {
    const userProfile = userValid.route.params
    // console.log(userValid)
    return (
        <Drawer.Navigator
            initialRouteName="Profile"
            drawerPosition={'left'}
            drawerType={'slide'}
        >
            <Drawer.Screen name="Profile" component={Profile}
            
            />
        </Drawer.Navigator>
    )
}

export default RoutesContent