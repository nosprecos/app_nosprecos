import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    View,
    Text,
    TouchableOpacity,
    Button,
    Dimensions,
    Image,
} from 'react-native'
import { colors } from '../styles/colors'
import { styles } from '../styles'
import UserDefault from "../../assets/Icons/userDefault.svg"
import Instagram from "../../assets/Icons/instagram.svg"
import Whatsapp from "../../assets/Icons/whatsapp.svg"
import Facebook from "../../assets/Icons/facebook.svg"
import { texts } from '../styles/texts'
import { useUser } from '../contexts/User'
import ImageInput from './ImageInput'

export const UserInfo = ({edit}) => {
    const { user } = useUser()
    const [userRealImage, setUserRealImage] = useState('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==')
    const navigation = useNavigation()
    return (
        <View>
            <View style={styles.userInfoBg}>

            </View>
            <View style={styles.userInfo}>


                <View style={styles.userInfoImage}>
                    {!userRealImage && <UserDefault
                        width={'100%'}
                        height={'100%'}
                        fill={colors.secondary}
                    />                        
                    }
                    
                    <ImageInput
                    image={userRealImage}
                    setImage={setUserRealImage}
                    edit={edit}
                    />

                </View>
                <View style={styles.userInfoContent}>
                
                    <View style={styles.userInfoNames}>
                        <Text style={texts.subtitleLight}>
                            {user.userRealName}
                        </Text>
                        <Text style={texts.textLight}>
                            {user.userLoginName}
                        </Text>
                    </View>
                    <View style={styles.userInfoActions}>
                        <TouchableOpacity
                            style={[styles.userInfoButtons, {
                                backgroundColor: colors.light,
                            }]}
                            onPress={() => {
                                navigation.navigate("EditProfile")
                            }}
                        >
                            <Text

                            >
                                Editar Perfil
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userInfoButtons}
                            onPress={() => {
                                console.log('Wpp!')
                            }}
                        >
                            <Whatsapp
                                height={20}
                                width={20}
                                fill={colors.light}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userInfoButtons}
                            onPress={() => {
                                console.log('Face!')
                            }}
                        >
                            <Facebook
                                height={20}
                                width={20}
                                fill={colors.light}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userInfoButtons}
                            onPress={() => {
                                console.log('Insta')
                            }}
                        >
                            <Instagram
                                height={20}
                                width={20}
                                fill={colors.light}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}


export const UserInfoSideBar = () => {
    const { user } = useUser()
    const navigation = useNavigation()
    return (
        <View style={{
            height: Dimensions.get('window').height*0.2, 
        }}>
            <View style={styles.userInfoBg}>

            </View>
            <View style={styles.userInfoSideBar}>


                <View style={styles.userInfoImageSideBar}>
                    <UserDefault
                        width={'100%'}
                        height={'100%'}
                        fill={colors.secondary}
                    />
                </View>
                <View style={styles.userInfoContentSideBar}>
                    <View style={styles.userInfoNamesSideBar}>
                        <Text style={texts.subtitleLight}>
                            {user.userRealName}
                        </Text>
                        <Text style={texts.textLight}>
                            {user.userLoginName}
                        </Text>
                    </View>
                    <View style={styles.userInfoActionsSideBar}>
                        <TouchableOpacity
                            style={[styles.userInfoButtons, {
                                backgroundColor: colors.light,
                            }]}
                            onPress={() => {
                                navigation.navigate("EditProfile")
                            }}
                        >
                            <Text

                            >
                                Editar Perfil
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        </View>
    )
}