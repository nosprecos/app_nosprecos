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
export const UserImage = ({ image, edit, fill }) => {
    if (!fill) fill = colors.secondary
    return (
        <View
            style={{
                width: '100%',
                height: '100%',
            }}>
            <UserDefault
                width={'100%'}
                height={'100%'}
                fill={fill}
            />

            {image && edit &&
                <Image source={{ uri: image }} style={{
                    borderRadius: 100,
                    width: 110,
                    height: 110,
                    backgroundColor: '#cccccc'
                }}
                />
            }
        </View>
    )


}