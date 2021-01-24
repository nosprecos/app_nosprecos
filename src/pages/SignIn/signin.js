import React from 'react';
import {styles} from '../../styles'
import {colors} from '../../styles/colors'
import Logo from "../../../assets/Logo/logoNosPrecos.svg";
import Tickets from '../../../assets/Logo/tickets.svg'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

function Signin(){


    return (

        <View
        style={styles.container}
        >
            <Logo
                width={250}
                height={250}
            />
            <Text
            style={{
               color: '#d32576',   
            }}
            >
                não
            </Text>
        </View>

    );
}

export default Signin;