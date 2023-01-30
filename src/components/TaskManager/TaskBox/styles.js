import { StyleSheet } from "react-native"
import { colors } from "../../../constants/colors"

export const TaskBoxStyle = StyleSheet.create({
    taskListItem: {
        margin: 10,
        backgroundColor: colors.background ,
        padding: 10,
        borderRadius: 10,
        color: colors.white
      },
      taskListContainer: {
        color: colors.grey
      }
})