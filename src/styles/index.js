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
    inputMultiline:{
        width: '100%',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        minHeight: 60,
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
        padding: 10,
        maxHeight: 60,
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
        justifyContent: 'space-around',
        padding: 5,
    },
    headerMenu: {
        width: Dimensions.get('window').width * 0.10,
        height: Dimensions.get('window').width * 0.13,
    },
    headerUser: {
        width: Dimensions.get('window').width * 0.13,
        height: Dimensions.get('window').width * 0.13,
    },
    headerLogo: {
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.13,
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 30,
    },
    userInfoSideBar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 60,
        paddingHorizontal: 15,
    },
    userInfoBg: {
        backgroundColor: colors.secondaryDark,
        height: Dimensions.get('window').height * 0.1,
        marginBottom: -(Dimensions.get('window').height * 0.1),
    },
    userInfoImage: {
        height: Dimensions.get('window').width * 0.3,
        width: Dimensions.get('window').width * 0.3,
        marginTop: Dimensions.get('window').height * 0.02,
        backgroundColor: colors.light,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userInfoImageSideBar: {
        height: Dimensions.get('window').width * 0.25,
        width: Dimensions.get('window').width * 0.25,
        marginTop: Dimensions.get('window').height * 0.025,
        backgroundColor: colors.secondaryDark,
        borderRadius: 100,
    },
    userInfoContent: {
        flexDirection: 'column',
        height: Dimensions.get('window').height * 0.18,
        justifyContent: 'space-evenly',
    },
    userInfoContentSideBar: {
        flexDirection: 'column',
        height: Dimensions.get('window').height * 0.18,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 1,
    },
    userInfoNames: {
        flexDirection: 'column',
        paddingHorizontal: 5,
    },
    userInfoNamesSideBar: {
        flexDirection: 'column',
        width: '100%',
        paddingHorizontal: 10,
    },
    userInfoActions: {
        width: Dimensions.get('window').width * 0.7,
        minWidth: 220,
        maxWidth: 250,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    userInfoActionsSideBar: {
        width: Dimensions.get('window').width * 0.3,
        minWidth: 120,
        maxWidth: 200,
        flexDirection: 'row',
        alignContent: 'flex-start',

    },
    userInfoButtons: {
        backgroundColor: colors.secondaryDark,
        padding: 8,
        borderRadius: 10,
        flexDirection: 'row',
        marginHorizontal: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    labels: {
        marginTop: 10,
        alignSelf: 'flex-start',
        ...texts.textLight
    },
    editPassword: {
        width: '100%',
        padding: 10,
        backgroundColor: colors.primaryDark,
        borderRadius: 15,
        marginTop: 10,
    },
    setQuantity:{
        flexDirection: 'row',
        width: '100%',
        minHeight: 60,
        marginTop: 10,
        justifyContent: 'center',
    },
    quantityButtonDisabled:{
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    quantityButton:{
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    quantityValue:{
        backgroundColor: colors.light,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    totalPriceValue:{
        width: '100%',
        maxHeight: 50,
        minHeight: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headText:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10, 
    },
    miniButton: {
        width: 40,
        height: 40,
    },
    titleActions: {
        marginBottom: 20,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardSpace: {
        paddingHorizontal: 15,
        marginVertical: 10,
    },
    cardHead: {
        backgroundColor: colors.secondaryDark,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardBody: {
        backgroundColor: colors.light,
        padding: 15,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    cardSubInfo: {
        alignItems: 'flex-end',
        paddingVertical: 5,
    },
    cardEditActions: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    ...texts

});