import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    Modal,
    Image,
    TouchableOpa
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { set } from 'react-native-reanimated'
import { colors } from '../styles/colors'
import { texts } from '../styles/texts'

export default function Quantity({ticket, setTicket}){
    function numberOfTickets(operation) {
        if(operation){
            setTicket((ticket + 1))
        } else {
            setTicket((ticket - 1))
        }
    }


    return (
        <View style={{
            flexDirection: 'row',
            width: '100%',
            minHeight: 60,
            marginTop: 10,
            justifyContent: 'center',
        }}>
            { ticket == 1 &&  <TouchableOpacity style={{
                backgroundColor: colors.secondary,
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.5,
                padding: 30,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
            }} 
            disabled={true}  
        >
                <Text style={{
                    ...texts.subtitleLight,   
                }}>
                    -
                </Text>
            </TouchableOpacity> }

            { ticket > 1 &&  <TouchableOpacity style={{
                backgroundColor: colors.secondary,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                width: 80,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
            }}                           
            onPress={()=> numberOfTickets(false, ticket)}
        >
                <Text style={{
                    ...texts.subtitleLight,   
                }}>
                    -
                </Text>
            </TouchableOpacity> }

            <View style={{
                backgroundColor: '#ffffff',
                paddingVertical: 10,
                paddingHorizontal:60,
                alignItems: 'center',
                justifyContent: 'center',   
            }}            
            >
                <Text style={{
                    alignItems: 'center',
                    ...texts.subtitleSecondaryDark,       
                }}>
                    {ticket}
                </Text>
            </View>

            <TouchableOpacity style= {{
                backgroundColor: colors.secondary,
                padding: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
            }}
            onPress={()=> numberOfTickets(true)}
            >
                <Text style={{
                    ...texts.subtitleLight,   
                }}>
                    +
                </Text>
            </TouchableOpacity>
        </View>

        )
}

