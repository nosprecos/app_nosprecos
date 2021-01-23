import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../../styles'
import {colors} from '../../styles/colors'


function Preload() {
    const navigation = useNavigation();

    return (
        
        <View style={styles.container}>             
            
            <ActivityIndicator size="large" color={`${colors.secondary}`} />          
            <Text style={styles.titleSecondary}>
                NOS PREÇOS
            </Text>
            
        </View>       
        );

}

export default Preload;