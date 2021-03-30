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
import { ButtonAction } from './ButtonAction'
export const CardAd = ({ ad, edit, ads, setAds, index }) => {
    function removeAds(index, ads) {
        ads.splice(index, 1)
        setAds([...ads])
    }
    return (
        <View style={styles.cardSpace}>
            <View style={styles.cardHead}>
                <View>
                    <Text style={texts.subtitleLight}>
                        {ad.adName}
                    </Text>
                    <Text style={texts.textLight}>
                        {ad.totalPrice} - {ad.adDate}
                    </Text>
                </View>

            </View>
            <View style={styles.cardBody}>
                <Text style={texts.textSecondaryDark}>
                    {ad.adDescription}
                </Text>
                <View style={styles.cardSubInfo}>
                    <Text style={texts.textDark}>
                        Quantidade: {ad.ticketQuantity}
                    </Text>
                </View>
                {edit &&
                    <View style={styles.cardEditActions}>


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

