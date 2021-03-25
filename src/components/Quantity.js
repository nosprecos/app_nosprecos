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

export default function Quantity({ticket}){
    const [numberTicket, setNumberTicket] = useState(ticket)

    function isZero(){
        if(numberTicket === '0'){
            return true
        }
        else {
            return false
        }
    }

    function numberOfTickets(operation){
        if(operation){
            setNumberTicket((numberTicket + 1))
        } else {
            setNumberTicket((numberTicket - 1))
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
            <TouchableOpacity style={{
                backgroundColor: colors.secondary,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                width: 80,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
            }}                           
            onPress={()=> numberOfTickets(false)}
            //disabled={() =>isZero()}  
        >
                <Text style={{
                    ...texts.subtitleLight,   
                }}>
                    -
                </Text>
            </TouchableOpacity>

            <View style={{
                backgroundColor: '#ffffff',
                width: '50%',
                alignItems: 'center',
                justifyContent: 'center',   
            }}            
            >
                <Text style={{
                    alignItems: 'center',
                    ...texts.subtitleSecondaryDark,       
                }}>
                    {numberTicket}
                </Text>
            </View>

            <TouchableOpacity style= {{
                backgroundColor: colors.secondary,
                flex: 1,
                width: 80,
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