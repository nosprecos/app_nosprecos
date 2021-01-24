import { StyleSheet} from 'react-native';
const FONT_FAMILY_MAIN = 'CatamaranBlack'
import {colors} from './colors'
import {texts} from './texts'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: colors.primary,
        alignItems: 'center',
        
    },
    ticket:{
        alignItems: 'flex-start',
        width: '100%',
        height: '50%',
        marginRight: 100,
        marginBottom: 75,
    },
    logo:{
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ...texts

});