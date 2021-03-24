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
import Settings from "../../assets/Icons/settings.svg"
import { ButtonAction } from './ButtonAction'
import {
    Header,
} from './Header'
import {
    UserInfo,
} from './UserInfo'
export const CardAd = ({ ad, edit, ads, setAds, index }) => {
    function removeAds(index, ads) {
        ads.splice(index, 1)
        setAds([...ads])
    }
    return (
        <View style={{

            paddingHorizontal: 15,
            marginVertical: 10,
        }}>
            <View style={{
                backgroundColor: colors.secondaryDark,
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'

            }}>
                <View>
                    <Text style={texts.subtitleLight}>
                        {ad.adName}
                    </Text>
                    <Text style={texts.textLight}>
                        {ad.totalPrice} - {ad.adDate}
                    </Text>
                </View>

            </View>
            <View style={{
                backgroundColor: colors.light,
                padding: 15,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
            }}>
                <Text style={texts.textSecondaryDark}>
                    {ad.adDescription}
                </Text>
                <View style={{
                    alignItems: 'flex-end',
                    paddingVertical: 5,
                }}>
                    <Text style={texts.textDark}>
                        Quantidade: {ad.ticketQuantity}
                    </Text>
                </View>
                {edit &&
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                    }}>


                        <View>
                            <ButtonAction
                                title={'Editar'}
                                action={() => console.log('editar ad')}
                            />
                        </View>
                        <View>
                            <ButtonAction
                                title={'Excluir'}
                                action={() => removeAds(index, ads)}
                                color={colors.error}
                            />
                        </View>


                    </View>}
            </View>

        </View>
    )
}

