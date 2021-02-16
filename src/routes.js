import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { styles } from './styles'

import Preload from './pages/Preload/preload.js'
import Signin from './pages/SignIn/signin.js'
import Signup from './pages/SignUp/signup.js'
import Profile from './pages/Profile/profile.js'


import {
  HeaderTitle,
  HeaderLeft,
  HeaderRight
} from './components/Header'

import {
  TabMenu
} from './components/TabMenu'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Preload"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Profile" component={Profile} options={{
          headerShown: true,
          headerTitleAlign: true,
          headerStyle: styles.header,
          headerTitle: () => (<HeaderTitle />),
          headerLeft: () => (<HeaderLeft />),
          headerRight: () => (<HeaderRight />),

        }} />
      </Stack.Navigator>




    </NavigationContainer>
  )
}

export default Routes;