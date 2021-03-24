import React, { useState } from 'react'
import {
    View,
    Text,
    Button,
    ScrollView,
    TouchableOpacity,
    Thumbnail,
} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { colors } from '../../styles/colors'
import { styles } from '../../styles'
import { texts } from '../../styles/texts'
import Logo from "../../../assets/Logo/logoNosPrecos.svg"
import Menu from "../../../assets/Icons/menu.svg"
import UserDefault from "../../../assets/Icons/userDefault.svg"
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
    console.log(user)
    return (
        <ScrollView style={styles.container}>

            <Header navigation={navigation} />
            <UserInfo user={user}
                edit={false}
            />
            <View style={{
                marginBottom: 20,
                paddingHorizontal: 15,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>

                <Text style={texts.subtitleSecondary}>Anúncios</Text>
                <TouchableOpacity style={{
                    width: 40,
                    height: 40,
                }}
                    onPress={() => setEdit(!edit)}
                >
                    <Settings
                        width={'100%'}
                        height={'100%'}
                        fill={colors.secondary}
                    />
                </TouchableOpacity>
            </View>
            <ListAds
                edit={edit}
            />
        </ScrollView>
    )
}