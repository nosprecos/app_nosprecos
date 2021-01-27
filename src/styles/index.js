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
        flex: 1,
        minHeight: 120,
        marginTop: -(Dimensions.get('window').height * 0.03),
        marginLeft: Dimensions.get('window').width * 0.4,
        transform: [
            { rotateZ: "-160deg" },
        ]
    },
    top:{
        flex:1,
        height: '40%',
        minHeight: 30,
        maxHeight: 100,
    },
    logoPreload:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%',
    },
    logo:{
        flex: 1,
        maxHeight: 200,
        minHeight: 80,
        height: '30%',
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
        marginVertical: 5,
    },
    signIn:{
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 30,
        flex: 1,
        height: '30%',

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
        marginTop: 10,
    },
    ...texts

});