import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    Modal,
    Image,
} from 'react-native'

export default function Quantity({ticket}){
    const [numberTicket, setNumberTicket] = useState(ticket)
    return (
        <View style={{
            flexDirection: 'row',
            width: '100%',
            minHeight: 50,
            marginTop: 10,
            backgroundColor: '#ffffff',
            justifyContent: 'center',
        }}>
            <View style={{
                backgroundColor: '#ffffff',
                width: '20%',
                alignItems: 'center',
        
        }}>
                <Text>
                    -
                </Text>
            </View>

            <View style={{
                backgroundColor: '#000000',
                width: '60%',
                alignItems: 'center',
            }}            
            >
                <Text style={{
                    alignItems: 'center',
            
                }}>
                    {numberTicket}
                </Text>
            </View>

            <View style= {{
                backgroundColor: '#C9c9c9',
                width: '20%',
                alignItems: 'center',
            }}>
                <Text>
                    +
                </Text>
            </View>
        </View>

        )
}