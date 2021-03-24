import React, { useState, useRef } from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { styles } from '../../styles'
import { colors } from '../../styles/colors'
import { texts } from '../../styles/texts'
import {
    Header,
} from '../../components/Header'
export default function CreateAd({navigation}){




return (
        <ScrollView>
            <Header navigation={navigation} />
            <View>
            <Text>
                CRIAR ANUNCIO
            </Text>
        </View>
        </ScrollView>



)}