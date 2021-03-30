import React, {useState} from 'react'
import { colors } from '../styles/colors'
import { styles } from '../styles'
import { texts } from '../styles/texts'
import DateTimePicker from '@react-native-community/datetimepicker';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Thumbnail,
} from 'react-native'

export function DatePicker(){
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [dateString, setDateString] = useState(`${date.getDay()}/ ${date.getMonth()}/ ${date.getFullYear()}`);

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

    return (
        <View>
            <TouchableOpacity
            style={{
                width: 150,
                height: 150,
                backgroundColor: '#ffffff',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={()=> showDatepicker()}
            >
            <Text>
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


