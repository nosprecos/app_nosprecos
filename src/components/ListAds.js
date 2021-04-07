import React, { useState } from 'react'
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Thumbnail,
} from 'react-native'
import { colors } from '../styles/colors'
import { styles } from '../styles'
import { texts } from '../styles/texts'
import Logo from "../../assets/Logo/logoNosPrecos.svg"
import Menu from "../../assets/Icons/menu.svg"
import UserDefault from "../../assets/Icons/userDefault.svg"


import {
    CardAd,
} from './CardAd'
export const ListAds = ({ edit, ads, setAds }) => {


    return (
        <View>
            {ads.map((ad, index) => (
                <CardAd
                    ad={ad}
                    edit={edit}
                    ads={ads}
                    setAds={setAds}
                    key={index}
                    index={index}
                />
            ))}

        </View>
    )
}

