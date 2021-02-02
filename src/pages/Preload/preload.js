import React, { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {styles} from '../../styles'
import {colors} from '../../styles/colors'
import Logo from "../../../assets/Logo/logoNosPrecos.svg"
import Tickets from '../../../assets/Logo/tickets.svg'

function Preload() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Signin');
        }, 1000);

    }, []);

    return (
        
        <View style={styles.container}>  
               
            <View style={styles.logoPreload}>
                <Logo
                    width={'100%'}
                    height={'100%'}
                    />
                <ActivityIndicator size="large" color={`${colors.secondary}`} /> 
            </View >
            <View style={styles.bottomPreload}>
                <View style={styles.ticketPreload}>
                    <Tickets
                        width={'100%'}
                        height={'100%'}              
                    />
                </View>
            </View>                           
        </View>         

    )
}

export default Preload;