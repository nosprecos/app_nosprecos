import { StyleSheet, Dimensions} from 'react-native';
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
    },
    ticketPreload: {
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
        flex: 1,
        marginTop: -(Dimensions.get('window').height * 0.03),
        marginLeft: Dimensions.get('window').width * 0.4,
        transform: [
            { rotateZ: "-160deg" },
        ]
    },
    top:{
        height: Dimensions.get('window').height * 0.15,
        minHeight: 60,        

    },
    logoPreload:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%',
    },
    logo:{
        flex: 1,
        minHeight: 50,
        maxHeight: 150,
        paddingHorizontal: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').height * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        width: '100%',
        borderRadius: 15,
        padding: 15,
        minHeight: 60,
        borderWidth: 1,
        color: colors.light,
        borderColor: colors.light,
        ...texts.textBoldLight,
        marginVertical: Dimensions.get('window').height * 0.01,
    },
    signIn: {
        alignItems: 'center',
        height: Dimensions.get('window').height * 0.4,
        padding: 30,
        flex: 1,
    },
    bottom:{
        width: '100%',
        paddingTop: 30,
    },
    button:{
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        padding: 15,
        marginTop: Dimensions.get('window').height * 0.02,
        borderRadius: 30,

    },
    textButton:{
        width: '100%',
        alignItems: 'center',
        padding: 15,
    },

    ...texts

});