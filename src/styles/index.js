import { StyleSheet} from 'react-native';
const FONT_FAMILY_MAIN = 'CatamaranBlack'
import {colors} from './colors'
import {texts} from './texts'
//listEquips = [...listEquips, equip];

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleSecondary: {
        fontFamily: FONT_FAMILY_MAIN,
        fontWeight: "900",
        fontSize: 50,
        color: colors.secondary,
    },
});