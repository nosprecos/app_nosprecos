import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native'

import Preload from './pages/Preload/preload.js'
import Signin from './pages/SignIn/signin.js'
import Signup from './pages/SignUp/signup.js'
import Profile from './pages/Profile/profile.js'

const Stack = createStackNavigator()

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Preload"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Profile" component={Profile} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;