import React, {useState} from 'react'
import Routes from './src/routes'
import { StatusBar } from 'react-native'
import {colors} from './src/styles/colors'
import * as Font from 'expo-font';
import { useFonts } from 'expo-font'

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
    <StatusBar
        backgroundColor={colors.primary}
        barStyle={'light-content'}
      />    
    <Routes/>
    </>
  );
}


