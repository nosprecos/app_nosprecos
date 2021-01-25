import { StyleSheet} from 'react-native';
const FONT_FAMILY_MAIN = 'CatamaranBlack'
import {colors} from './colors'
import {texts} from './texts'
const FONT_FAMILY={
    regular: "Catamaran",
    black: "CatamaranBlack",
    extraBold: "CatamaranExtraBold",
    bold: "CatamaranBold",
    semiBold:"CatamaranSemiBold",
    medium: "CatamaranMedium",
    light: "CatamaranLight",
    thin: "CatamaranThin",
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        
    },
    ticketPreload:{
        alignItems: 'flex-start',
        width: '100%',
        height: '60%',
        marginRight: 100,
        marginTop: 100,
        transform: [
            { rotateZ: "20deg" },
        ]
    },
    ticket:{
        width: '100%',
        height: 150,
        marginLeft: 280,
        marginTop: -20,
        transform: [
            { rotateZ: "200deg" },
        ]
    },
    logoPreload:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%',
    },
    logo:{
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        width: '100%',
        borderRadius: 15,
        padding: 15,
        borderWidth: 1,
        color: colors.light,
        borderColor: colors.light,
        ...texts.textBoldLight,
    },
    signIn:{
        width: '100%',
        height: 320,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 30,
    },
    button:{
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        padding: 15,
        marginTop: 15,
        borderRadius: 30,

    },
    textButton:{
        
    },
    ...texts

});