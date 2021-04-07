import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    Modal,
    Image,
    TouchableOpacity
} from 'react-native'
import { colors } from '../styles/colors'
import { styles } from '../styles'
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
        <View style={styles.setQuantity}>
            { ticket == 1 &&  <TouchableOpacity style={styles.quantityButtonDisabled} 
            disabled={true}  
        >
                <Text style={texts.subtitleLight}>
                    -
                </Text>
            </TouchableOpacity> }

            { ticket > 1 &&  <TouchableOpacity style={[styles.quantityButton,{
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20
            }]}                           
            onPress={()=> numberOfTickets(false, ticket)}
        >
                <Text style={texts.subtitleLight}>
                    -
                </Text>
            </TouchableOpacity> }

            <View style={styles.quantityValue}            
            >
                <Text style={texts.subtitleSecondaryDark}>
                    {ticket}
                </Text>
            </View>

            <TouchableOpacity style= {[styles.quantityButton,{
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20
            }]}
            onPress={()=> numberOfTickets(true)}
            >
                <Text style={texts.subtitleLight}>
                    +
                </Text>
            </TouchableOpacity>
        </View>

        )
}

