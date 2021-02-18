import React, {useState} from 'react'
import Routes from './src/routes'
import { StatusBar } from 'react-native'
import {colors} from './src/styles/colors'
import { useFonts } from 'expo-font'
import UserProvider from './src/contexts/User'

export default function App() {

  const [loaded] = useFonts({
    Catamaran: require('./assets/Fonts/Catamaran-Regular.ttf'),
    CatamaranBlack: require('./assets/Fonts/Catamaran-Black.ttf'),
    CatamaranExtraBold: require('./assets/Fonts/Catamaran-ExtraBold.ttf'),
    CatamaranBold: require('./assets/Fonts/Catamaran-Bold.ttf'),
    CatamaranSemiBold: require('./assets/Fonts/Catamaran-SemiBold.ttf'),
    CatamaranMedium: require('./assets/Fonts/Catamaran-Medium.ttf'),
    CatamaranLight: require('./assets/Fonts/Catamaran-Light.ttf'),
    CatamaranThin: require('./assets/Fonts/Catamaran-Thin.ttf'),
  });

  if (!loaded) {
    return null
  }

  return (
    <>
    <UserProvider>
        <StatusBar
        backgroundColor={colors.primaryDark}
        barStyle={'light-content'}
        />
      <Routes/>
    </UserProvider>
    </>
  );
}


