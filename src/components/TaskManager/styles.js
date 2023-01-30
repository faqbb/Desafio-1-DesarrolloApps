import { StyleSheet } from "react-native"
import { fonts } from "../../../assets/fonts/fontIndex"
import { colors } from "../../constants/colors"

export const TaskManagerStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        fontFamily: fonts.primary
      }
})