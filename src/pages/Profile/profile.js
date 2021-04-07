import React, { useState } from 'react'
import {
    View,
    Text,
    Button,
    ScrollView,
    TouchableOpacity,
    Thumbnail,
    Dimensions,
} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { colors } from '../../styles/colors'
import { styles } from '../../styles'
import { texts } from '../../styles/texts'
import Logo from "../../../assets/Logo/logoNosPrecos.svg"
import Menu from "../../../assets/Icons/menu.svg"
import Add from "../../../assets/Icons/add.svg"
import Settings from "../../../assets/Icons/settings.svg"
import { useUser } from '../../contexts/User'




import {
    Header,
} from '../../components/Header'
import {
    UserInfo,
} from '../../components/UserInfo'
import {
    CardAd,
} from '../../components/CardAd'
import {
    ListAds,
} from '../../components/ListAds'

export const Profile = ({ navigation }) => {
    const { user } = useUser()
    const [edit, setEdit] = useState(false)
    let ticketQuantity = 5
    let ticketPrice = 2

    const [ads, setAds] = useState([{
        id: "aaaa",
        customerId: 'aaaa',
        adName: 'Show Profissional',
        adDate: '12/12/12',
        adDescription: `Descrição legal interessante de ler e tal, etc etc etc. Descrição legal interessante de ler e tal, etc etc etc. Descrição legal interessante de ler e tal, etc etc etc.`,
        ticketQuantity: 5,
        ticketPrice: 2,
        totalPrice: `R$ ${(ticketPrice * ticketQuantity).toFixed(2)}`,
        adWhatsappUrl: '5584999370302',
        adInstagramUrl: '5584999370302',
        adfacebookUrl: '5584999370302',
    }])
    function newAd(ads) {
        setAds([...ads, ads[0]])
    }
    return (
        <ScrollView style={styles.container}>

            <Header navigation={navigation} />
            <UserInfo user={user}
                edit={false}
            />
            <View style={styles.titleActions}>

<<<<<<< HEAD
            

        </View>
=======
                <Text style={texts.subtitleSecondary}>Anúncios</Text>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity style={styles.miniButton}
                        onPress={() => newAd(ads)}
                    >
                        <Add
                            width={'100%'}
                            height={'100%'}
                            fill={colors.light}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.miniButton}
                        onPress={() => setEdit(!edit)}
                    >
                        <Settings
                            width={'100%'}
                            height={'100%'}
                            fill={colors.secondary}
                        />
                    </TouchableOpacity>
                </View>

            </View>
            <ListAds
                edit={edit}
                ads={ads}
                setAds={setAds}
            />
        </ScrollView>
>>>>>>> origin/myads
    )
}