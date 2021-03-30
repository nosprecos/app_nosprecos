import React, {useState} from 'react'
import { colors } from '../styles/colors'
import { styles } from '../styles'
import { texts } from '../styles/texts'
import DateTimePicker from '@react-native-community/datetimepicker';
import {
    View,
    Text,
    Dimensions,
    Button,
    Image,
    TouchableOpacity,
    Thumbnail,
} from 'react-native'

export function DatePicker(){
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [dateString, setDateString] = useState(formatData(date.getDate(), date.getMonth, date.getFullYear));

    const onChange = (event, selectedDate) => {
        if (selectedDate === undefined) {
            setShow(false)
            setDate(new Date())
            setDateString(`${new Date().getDate()}/ ${new Date().getMonth() + 1}/ ${new Date().getFullYear()}`) 
        } else {
            setShow(false)
            setDate(selectedDate);
            setDateString(`${selectedDate.toLocaleDateString()}`)
        }
    }
     
    function showDatepicker() {
       setShow(true);
    } 
    
    
    function formatData({day, month, year}){
        const d = day
        const m = month
        const y = year
        
        if(day < 10){
            d = '0'+ `${day}`
            if(month == 0){
                m = 'Jan'
            } else if (month == 1){
                m = 'Fev'
            } else if (month == 2){
                m = 'Mar'
            } else if (month == 3){
                m = 'Abr'
            }else if (month == 4){
                m = 'Mai'
            }else if (month == 5){
                m = 'Jun'
            }else if (month == 6){
                m = 'Jul'
            }else if (month == 7){
                m = 'Ago'
            }else if (month == 8){
                m = 'Set'
            }else if (month == 9){
                m = 'Out'
            }else if (month == 10){
                m = 'Nov'
            }else if (month == 11){
                m = 'Dez'
            }        
        } else {
            if(month == 0){
                m = 'Jan'
            } else if (month == 1){
                m = 'Fev'
            } else if (month == 2){
                m = 'Mar'
            } else if (month == 3){
                m = 'Abr'
            }else if (month == 4){
                m = 'Mai'
            }else if (month == 5){
                m = 'Jun'
            }else if (month == 6){
                m = 'Jul'
            }else if (month == 7){
                m = 'Ago'
            }else if (month == 8){
                m = 'Set'
            }else if (month == 9){
                m = 'Out'
            }else if (month == 10){
                m = 'Nov'
            }else if (month == 11){
                m = 'Dez'
            }
        }
    
        return (`${d}/${m}/${y}`)
    }

    return (
        <View>
            <TouchableOpacity
            style={{
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
            }}
                    
            onPress={()=> showDatepicker()}
            >
            <Image style={styles.imageInput}
                source={require("../../assets/Icons/calendar.png")} />
            <Text style={styles.textLight}>
                {dateString}
            </Text>
                
            </TouchableOpacity>
            {show && (<DateTimePicker
                testID={'dateTimePicker'}
                value={date}
                mode={'date'}
                is24Hour={true}
                display="calendar"
                onChange={onChange}
            />

            )}

        </View>




)}


