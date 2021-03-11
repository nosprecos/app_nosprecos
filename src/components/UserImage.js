import React, { useState } from 'react'
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native'

import { texts } from '../styles/texts'
import { colors } from '../styles/colors'
import { styles } from '../styles'
import UserDefault from "../../assets/Icons/userDefault.svg"
export const UserImage = ({ image, edit, fill, style }) => {
    if (!fill) fill = colors.secondary
    let margin = 0
    if (edit) { margin = -30 }
    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                marginBottom: margin,

            }}>
            {!image && <UserDefault
                width={'100%'}
                height={'100%'}
                fill={fill}

            />}

            {image &&
                <Image source={{ uri: image }} style={{
                    borderRadius: 100,
                    width: '100%',
                    height: '100%',
                }}
                />
            }
        </View>
    )


}