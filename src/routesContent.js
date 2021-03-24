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
import {
    SideBar
} from './components/SideBar'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Profile } from './pages/Profile/profile'
import EditProfile from './pages/EditProfile/editProfile'
import CreateAd from './pages/CreateAd/createAd'

const Drawer = createDrawerNavigator()
const RoutesContent = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Profile"
            drawerPosition={'left'}
            drawerContent={() => (
                < SideBar/>
            )}
        >
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="EditProfile" component={EditProfile} />
            <Drawer.Screen name="CreateAd" component={CreateAd} />
        </Drawer.Navigator>
    )
}

export default RoutesContent