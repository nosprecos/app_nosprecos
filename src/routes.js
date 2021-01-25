import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native'

import Preload from './pages/Preload/preload.js'
import Signin from './pages/SignIn/signin.js'


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

      </Stack.Navigator>
    </NavigationContainer>    
  )
}

export default Routes;