import { StyleSheet } from "react-native";
import { fonts } from "../../../assets/fonts/fontIndex";
import { colors } from "../../constants/colors";

export const MainMenuStyle = StyleSheet.create({
    container:{
        backgroundColor: colors.background,
        flex: 1,
        fontFamily: fonts.primary
    },
    title:{
        color: colors.white,
        alignContent: "center",
        justifyContent: "center",
        fontFamily: fonts.primaryBold
    },
    buttonBox: {
        backgroundColor: colors.grey,
        padding: 10
    },
    button: {
        backgroundColor: colors.darkRed,
        padding: 10,
        color: colors.white
    }
})