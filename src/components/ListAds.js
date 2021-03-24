import React from 'react'
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
export const ListAds = ({ edit }) => {
    let ticketQuantity = 5
    let ticketPrice = 2
    const ads = [{
        id: "aaaa",
        customerId: 'aaaa',
        adName: 'Show Profissional',
        adDate: '12/12/12',
        adDescription: `Descrição legal interessante de ler e tal, etc etc etc. Descrição legal interessante de ler e tal, etc etc etc. Descrição legal interessante de ler e tal, etc etc etc.`,
        ticketQuantity: 5,
        ticketPrice: 2,
        totalPrice: `R$ ${(ticketPrice * ticketQuantity).toFixed(2)}`,
        adWhatsappUrl: '5584999370302',
        adInstagramUrl: '5584999370302',
        adfacebookUrl: '5584999370302',
    }, {
        id: "aaaa",
        customerId: 'aaaa',
        adName: 'Show Profissional',
        adDate: '12/12/12',
        adDescription: `Descrição legal interessante de ler e tal, etc etc etc. Descrição legal interessante de ler e tal, etc etc etc. Descrição legal interessante de ler e tal, etc etc etc.`,
        ticketQuantity: 5,
        ticketPrice: 2,
        totalPrice: `R$ ${(ticketPrice * ticketQuantity).toFixed(2)}`,
        adWhatsappUrl: '5584999370302',
        adInstagramUrl: '5584999370302',
        adfacebookUrl: '5584999370302',
    }]
    return (
        <View>
            {ads.map((ad, key) => (
                <CardAd
                    ad={ad}
                    edit={edit}
                    key={key}
                />
            ))}
        </View>
    )
}

