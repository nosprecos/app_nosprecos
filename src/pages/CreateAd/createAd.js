import React, { useState, useRef } from 'react'
import { 
    View,
    Text,
    Dimensions,
    Image,
    TextInput    
    } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { styles } from '../../styles'
import { colors } from '../../styles/colors'
import { texts } from '../../styles/texts'
import {DatePicker} from '../../components/DatePicker'
import {
    Header,
} from '../../components/Header'
import 
    Quantity
 from '../../components/Quantity'

export default function CreateAd({navigation}){

    const [title, setTitle] = useState('')
    const [data, setData] = useState(new Date(1598051730000))
    const [description, setDescription] = useState('')
    const [price, setprice] = useState('')
    const [ticket, setticket] = useState(1)

    function formatData(data){
        setData(data)
        const array = data.split('')       
        if(array.lenght == 2){
            const newArray = array.splice(2, 0 , "/")
            setData(newArray)    
        }
        if(array.lenght == 5){
            const newArray = array.splice(5, 0 , "/")
            setData(newArray)    
        }
              
    }

return (
        <ScrollView style={styles.container}>
            <Header navigation={navigation} />
            <View style={{padding: 30}}>
            <View style={{
                height: Dimensions.get('window').height * 0.1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{
                    ...texts.subtitleSecondary,
                }}>
                    Criar Anúncio
                </Text>
            </View>
            <View>
                <Text style={{
                    color: colors.light,
                    marginTop: 10,

                }}>
                    Título do Anúncio:
                </Text>  
            </View>

            <View style={{
                alignItems: 'center',
            }}>
                <View style={{
                width: Dimensions.get('window').width * 0.8,
                borderRadius: 15,
                flexDirection: 'row',
                alignItems: 'center',
                alignContent: 'center',
                minHeight: 60,
                maxHeight: 60,
                borderWidth: 1,
                color: colors.light,
                borderColor: colors.light,
                ...texts.textBoldLight,
                marginVertical: Dimensions.get('window').height * 0.01,
                }}>
                        <TextInput
                        style={{
                            color: colors.light,
                            ...texts.textLight,
                            flex: 1,
                            padding: 10,
                        } }
                        onChangeText={text =>  setTitle(text)}
                        placeholder={'Título do Anúncio'}
                        autoCapitalize={'none'}                            
                        placeholderTextColor={colors.secondary}
                        textContentType={"emailAddress"}
                        />
                </View>

                
            
            </View>

                <View>
                    <Text style={{
                        color: colors.light,
                        marginTop: 10,

                    }}>
                        Data do Anúncio:
                    </Text>  
                </View>
                <View style={{
                    alignItems: 'center',
                }}>
                        {/* <View style={{
                        width: Dimensions.get('window').width * 0.8,
                        borderRadius: 15,
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignContent: 'center',
                        minHeight: 60,
                        maxHeight: 60,
                        borderWidth: 1,
                        color: colors.light,
                        borderColor: colors.light,
                        ...texts.textBoldLight,
                        marginVertical: Dimensions.get('window').height * 0.01,
                        }}> */}

                            <DatePicker
                            data={data}
                            value={data}
                            />
                            {/* <TextInput
                            style={{
                                color: colors.light,
                                ...texts.textLight,
                                flex: 1,
                                padding: 10,
                            } }
                            onChangeText={text =>                                
                                { if (text.length == 2 || text.length == 5){
                                        text = text + '/'
                                    }
                                
                                setData(text)

                            } }
                            value={data}
                            placeholder={'_ _/_ _/_ _'}
                            autoCapitalize={'none'}                            
                            placeholderTextColor={colors.secondary}
                            textContentType={"emailAddress"}
                            keyboardType={'number-pad'}
                            /> */}
                        {/* </View> */}
                    </View>

                <View>
                    <Text style={{
                        color: colors.light,
                        marginTop: 10,

                    }}>
                        Descrição do Anúncio:
                    </Text>  
                </View>
            <View style={{
                alignItems: 'center',
            }}>
                <View style={{
                width: Dimensions.get('window').width * 0.8,
                borderRadius: 15,
                flexDirection: 'row',
                alignItems: 'center',
                alignContent: 'center',
                minHeight: 60,
                borderWidth: 1,
                color: colors.light,
                borderColor: colors.light,
                ...texts.textBoldLight,
                marginVertical: Dimensions.get('window').height * 0.01,
                }}>
                        <TextInput
                        style={{
                            color: colors.light,
                            ...texts.textLight,
                            padding: 10,
                            justifyContent: 'flex-start',
                        } }
                        onChangeText={text =>  setDescription(text)}
                        placeholder={'Quais informações você gostaria de adicionar ao anúcio?'}
                        multiline={true}
                        autoCapitalize={'none'}                            
                        placeholderTextColor={colors.secondary}
                        textContentType={"emailAddress"}
                        />
                </View>
            </View>

            <View>
                    <Text style={{
                        color: colors.light,
                        marginTop: 10,

                    }}>
                        Preço do Anúncio:
                    </Text>  
                </View>
            <View style={{
                alignItems: 'center',
            }}>
                <View style={{
                width: Dimensions.get('window').width * 0.8,
                borderRadius: 15,
                flexDirection: 'row',
                alignItems: 'center',
                alignContent: 'center',
                minHeight: 60,
                borderWidth: 1,
                color: colors.light,
                borderColor: colors.light,
                ...texts.textBoldLight,
                marginVertical: Dimensions.get('window').height * 0.01,
                }}>
                        <TextInput
                        style={{
                            color: colors.light,
                            ...texts.textLight,
                            padding: 10,
                            justifyContent: 'flex-start',
                        } }
                        onChangeText={text =>  setTitle(text)}
                        placeholder={'Preço do Anúncio'}
                        autoCapitalize={'none'}                            
                        placeholderTextColor={colors.secondary}
                        keyboardType={'number-pad'}
                        />
                </View>
            </View>

            <View>
                    <Text style={{
                        color: colors.light,
                        marginTop: 10,

                    }}>
                        Quantidade de Ingressos:
                    </Text>  
            </View>

            <View style={{
                alignItems: 'center',
            }}> 
                <Quantity
                ticket={ticket}
                />

            </View>


            </View>            
        </ScrollView>



)}