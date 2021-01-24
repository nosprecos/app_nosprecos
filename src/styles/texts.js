import { StyleSheet } from 'react-native';
import {colors} from './colors'

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
    

export const texts = {
    //TITLES
    titlePrimary: {
        fontFamily: FONT_FAMILY.black,
        fontSize: 36,
        color: colors.primary,
    },
    titlePrimaryDark: {
        fontFamily: FONT_FAMILY.black,
        fontSize: 36,
        color: colors.primaryDark,
    },
    titleSecondary: {
        fontFamily: FONT_FAMILY.black,
        fontSize: 36,
        color: colors.secondary,
    },
    titleSecondaryDark: {
        fontFamily: FONT_FAMILY.black,
        fontSize: 36,
        color: colors.secondaryDark,
    },
    titleTertiary: {
        fontFamily: FONT_FAMILY.black,
        fontSize: 36,
        color: colors.tertiary,
    },
    titleLight: {
        fontFamily: FONT_FAMILY.black,
        fontSize: 36,
        color: colors.light,
    },
    titleDark: {
        fontFamily: FONT_FAMILY.black,
        fontSize: 36,
        color: colors.dark,
    },

    //SUBTITLES
    subtitlePrimary:{
        fontFamily: FONT_FAMILY.black,
        fontSize: 24,
        color: colors.primary,
    },
    subtitlePrimaryDark:{
        fontFamily: FONT_FAMILY.black,
        fontSize: 24,
        color: colors.primaryDark,
    },
    subtitleSecondary:{
        fontFamily: FONT_FAMILY.black,
        fontSize: 24,
        color: colors.secondary,
    },
    subtitleSecondaryDark:{
        fontFamily: FONT_FAMILY.black,
        fontSize: 24,
        color: colors.secondaryDark,
    },
    subtitleTertiary:{
        fontFamily: FONT_FAMILY.black,
        fontSize: 24,
        color: colors.tertiary,
    },
    subtitleDark:{
        fontFamily: FONT_FAMILY.black,
        fontSize: 24,
        color: colors.dark,
    },
    subtitleLight:{
        fontFamily: FONT_FAMILY.black,
        fontSize: 24,
        color: colors.light,
    },

    //TEXTS
    textLight:{
        fontFamily: FONT_FAMILY.light,
        fontSize: 18,
        color: colors.light,
    },
    textDark:{
        fontFamily: FONT_FAMILY.light,
        fontSize: 18,
        color: colors.dark,
    },
    textBoldLight:{
        fontFamily: FONT_FAMILY.black,
        fontSize: 18,
        color: colors.light,
    },
    textBoldDark:{
        fontFamily: FONT_FAMILY.black,
        fontSize: 18,
        color: colors.dark,
    },

}