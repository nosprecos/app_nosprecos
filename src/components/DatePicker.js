import React, {useState} from 'react'
import { colors } from '../styles/colors'
import { styles } from '../styles'
import { texts } from '../styles/texts'
import Calendar from "../../assets/Icons/calendar.svg"
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
    const [dateString, setDateString] = useState(`${whatDay(date.getDate())} / ${whatMonth(date.getMonth())} / ${date.getFullYear()}`);

    const onChange = (event, selectedDate) => {
        if (selectedDate === undefined) {
            setShow(false)
            setDate(new Date())
            setDateString(`${whatDay(new Date().getDate())} / ${whatMonth(new Date().getMonth())} / ${new Date().getFullYear()}`) 
        } else {
            setShow(false)
            setDate(selectedDate);
            setDateString(`${whatDay(selectedDate.getDate())} / ${whatMonth(selectedDate.getMonth())} / ${selectedDate.getFullYear()}`)
        }
    }
     
    function showDatepicker() {
       setShow(true);
    } 
    
    function whatMonth(month){
        if(month == 0){
            return 'Jan'
        } else if (month == 1){
            m = 'Fev'
        } else if (month == 2){
            return 'Mar'
        } else if (month == 3){
            return 'Abr'
        }else if (month == 4){
            return 'Mai'
        }else if (month == 5){
            return 'Jun'
        }else if (month == 6){
            return 'Jul'
        }else if (month == 7){
            return 'Ago'
        }else if (month == 8){
            return 'Set'
        }else if (month == 9){
            return 'Out'
        }else if (month == 10){
            return 'Nov'
        }else if (month == 11){
            return 'Dez'
        } else{
            return 'Mês não identificado'
        } 
    }    
    
    
    function whatDay(day){       
        if(day < 10){
           return '0'+`${day}`  
        } else {
            return `${day}`    
        }
    }

    return (
        <View style={{
            width: '100%',
        }}>
            <TouchableOpacity
            style={styles.input}
                    
            onPress={()=> showDatepicker()}
            >
            <View style={styles.imageInput}>
                <Calendar
                    width={'100%'}
                    height={'100%'}
                    fill={colors.secondary}
                />
            </View>
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
                minimumDate={new Date()}
            />

            )}

        </View>




)}


