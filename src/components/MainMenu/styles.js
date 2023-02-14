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
        marginTop: 55,
        textAlign: "center",        
        color: colors.white,
        fontFamily: 
        fonts.primaryBold,
        fontSize: 30,
        textShadowRadius: 30,
        textShadowColor: colors.black
    },
    buttonBox: {
        marginTop: 10,
        backgroundColor: colors.grey,
        padding: 10,
        flex: 1,
        justifyContent: "space-evenly",
        flexBasis: 120
    },
    button: {
        backgroundColor: colors.darkRed,
        padding: 10,
        color: colors.white
    }
})