import { StyleSheet, Dimensions } from 'react-native';
const FONT_FAMILY_MAIN = 'CatamaranBlack'
import { colors } from './colors'
import { texts } from './texts'
const FONT_FAMILY = {
    regular: "Catamaran",
    black: "CatamaranBlack",
    extraBold: "CatamaranExtraBold",
    bold: "CatamaranBold",
    semiBold: "CatamaranSemiBold",
    medium: "CatamaranMedium",
    light: "CatamaranLight",
    thin: "CatamaranThin",
}


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    top: {
        height: Dimensions.get('window').height * 0.15,
        minHeight: 60,

    },
    ticketPreload: {
        marginBottom: -(Dimensions.get('window').height * 0.15),
        marginLeft: -(Dimensions.get('window').width * 0.25),
        marginTop: Dimensions.get('window').height * 0.10,
        height: Dimensions.get('window').height * 0.5,
        maxHeight: 500,
        minHeight: 150,
        transform: [
            { rotateZ: "20deg" },
        ]
    },
    ticket: {
        flex: 1,
        marginTop: -(Dimensions.get('window').height * 0.03),
        marginLeft: Dimensions.get('window').width * 0.4,
        transform: [
            { rotateZ: "-160deg" },
        ]
    },
    logoPreload: {
        flex: 1,
        minHeight: 150,
        paddingHorizontal: Dimensions.get('window').width * 0.10,
        height: Dimensions.get('window').height * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomPreload: {
        width: '100%',
        height: Dimensions.get('window').height * 0.5,
    },
    logo: {
        flex: 1,
        minHeight: 50,
        maxHeight: 150,
        paddingHorizontal: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').height * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '100%',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 60,
        maxHeight: 60,
        borderWidth: 1,
        color: colors.light,
        borderColor: colors.light,
        ...texts.textBoldLight,
        marginVertical: Dimensions.get('window').height * 0.01,
    },
    textInput: {
        color: colors.light,
        ...texts.textBoldLight,
        flex: 1,

    },
    imageInput: {
        marginHorizontal: 10,
        height: 25,
        width: 25,
    },
    signIn: {
        alignItems: 'center',
        paddingHorizontal: 30,
        flex: 1,
    },
    bottom: {
        width: '100%',
        paddingTop: 30,
    },
    button: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        padding: 15,
        marginTop: Dimensions.get('window').height * 0.02,
        borderRadius: 30,

    },
    textButton: {
        width: '100%',
        alignItems: 'center',
        padding: 15,
    },
    header: {
        backgroundColor: colors.primaryDark,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: Dimensions.get('window').height * 0.09,
    },
    headerMenu: {
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').height * 0.1,
    },
    headerUser: {
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').height * 0.1,
    },
    headerLogo: {
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').height * 0.1,
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 60,
    },
    userInfoBg: {
        backgroundColor: colors.secondaryDark,
        height: Dimensions.get('window').height * 0.1,
        marginBottom: -(Dimensions.get('window').height * 0.1),
    },
    userInfoImage: {
        height: Dimensions.get('window').width * 0.3,
        width: Dimensions.get('window').width * 0.3,
        marginTop: Dimensions.get('window').height * 0.025,
        backgroundColor: colors.secondaryDark,
        borderRadius: 100,

    },
    userInfoContent: {
        flexDirection: 'column',
        height: Dimensions.get('window').height * 0.18,
        justifyContent: 'space-evenly',

    },
    userInfoNames: {
        flexDirection: 'column',
        paddingHorizontal: 5,
    },
    userInfoActions: {
        width: Dimensions.get('window').width * 0.7,
        minWidth: 220,
        maxWidth: 250,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    userInfoButtons: {
        backgroundColor: colors.secondaryDark,
        padding: 8,
        borderRadius: 10,
    },
    ...texts

});