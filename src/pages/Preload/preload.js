import React, { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, Text, View, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {styles} from '../../styles'
import {colors} from '../../styles/colors'
import Logo from "../../../assets/Logo/logoNosPrecos.svg"
import Tickets from '../../../assets/Logo/tickets.svg'

function Preload() {
    const navigation = useNavigation();

    /* useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Signin');
        }, 1000);

    }, []); */

    return (
        
        <View style={styles.container}>  
               
            <View style={styles.logo}>
                <Logo
                    width={250}
                    height={250}
                    />
                <ActivityIndicator size="large" color={`${colors.secondary}`} /> 
            </View >
            <View style={[styles.ticket, {
        transform: [
          { rotateZ: "20deg" },
        ]
      }]}>
                <Tickets              
                />
            </View>                           
        </View>       
        )

}

export default Preload;