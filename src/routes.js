import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native'
import {styles} from './styles'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Preload from './pages/Preload/preload.js'
import Signin from './pages/SignIn/signin.js'
import Signup from './pages/SignUp/signup.js'
import Profile from './pages/Profile/profile.js'
import Logo from "../assets/Logo/logoNosPrecos.svg"
import Menu from "../assets/Icons/menu.svg"
import UserDefault from "../assets/Icons/userDefault.svg"
import { colors } from './styles/colors'
const Stack = createStackNavigator()

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Preload"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Preload" component={Preload}/>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Profile" component={Profile} options={{ 
          headerShown: true,
          headerTitle: ()=>(
            <View style={styles.headerLogo}>
              <Logo
                height={'100%'}
                width={'100%'}
              />
            </View>
          ),
          headerStyle: styles.header,
          headerTitleAlign: 'center',
          headerLeft: ()=> (
            <View
              style={styles.headerMenu}
              onPress={()=>{console.log('Teu Cu')}}
              >
              <Menu
                height={'100%'}
                width={'100%'}
                fill={colors.light}
              />
            </View>
          ),  
          headerRight: () => (
            <View
              style={styles.headerUser}
              onPress={() => { console.log('Teu Cu') }}
            >
              <UserDefault
                height={'100%'}
                width={'100%'}
                fill={colors.light}
              />
            </View>
          ),
               
        }}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;