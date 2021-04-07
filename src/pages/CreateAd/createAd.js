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
import { ModalCustom, ModalInput } from '../../components/ModalCustom'
import { ButtonAction } from '../../components/ButtonAction'
import {DatePicker} from '../../components/DatePicker'
import {
    Header,
} from '../../components/Header'
import 
    Quantity
 from '../../components/Quantity'

export default function CreateAd({navigation}){
    const p = 0
    const [title, setTitle] = useState('')
    const [data, setData] = useState(new Date(1598051730000))
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [ticket, setTicket] = useState(1)

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
            <View style={styles.headText}>
                <Text style={texts.subtitleSecondary}>
                    Criar Anúncio
                </Text>
            </View>
            <View>
                <Text style={styles.labels}>
                    Título do Anúncio:
                </Text>  
            </View>

            <View>
                <View style={styles.input}>
                        <TextInput
                        style={[styles.textInput,{padding: 10}]}
                        onChangeText={text =>  setTitle(text)}
                        placeholder={'Título do Anúncio'}
                        autoCapitalize={'none'}                            
                        placeholderTextColor={colors.secondary}
                        textContentType={"emailAddress"}
                        />
                </View>

                
            
            </View>

                <View>
                    <Text style={styles.labels}>
                        Data do Anúncio:
                    </Text>  
                </View>

                <View>
                        <DatePicker
                        data={data}
                        value={data}
                        />
                </View>

                <View>
                    <Text style={styles.labels}>
                        Descrição do Anúncio:
                    </Text>  
                </View>
            <View>
                <View style={styles.inputMultiline}>
                        <TextInput
                        style={[styles.textInput, {paddingHorizontal: 10}]}
                        onChangeText={text =>  setDescription(text)}
                        placeholder={'Quais informações você gostaria de adicionar ao anúncio?'}
                        multiline={true}
                        autoCapitalize={'none'}                            
                        placeholderTextColor={colors.secondary}
                        textContentType={"emailAddress"}
                        />
                </View>
            </View>

            <View>
                    <Text style={styles.labels}>
                        Preço do Anúncio:
                    </Text>  
                </View>
            <View>
                <View style={styles.input}>
                        <TextInput
                        style={[styles.textInput,{paddingHorizontal:10}]}
                        onChangeText={text =>  setPrice(text)}
                        placeholder={'Preço do Anúncio'}
                        autoCapitalize={'none'}                            
                        placeholderTextColor={colors.secondary}
                        keyboardType={'number-pad'}
                        />
                </View>
            </View>

            <View>
                    <Text style={styles.labels}>
                        Quantidade de Ingressos:
                    </Text>  
            </View>

                
                <Quantity
                ticket={ticket}
                setTicket={setTicket}
                />
                
            <View style={styles.totalPriceValue}>
                <Text style={styles.subtitleSecondary}>
                    Total: R${(ticket*price).toFixed(2)}
                </Text>
            </View> 

            <ButtonAction
                        title={"Anunciar"}
                        action={() => {
                            console.log('Clicou')
                        }}

                    />

            </View>

                       
        </ScrollView>



)}