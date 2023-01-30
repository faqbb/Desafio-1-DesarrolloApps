import { Text, View } from "react-native";
import { TaskBoxStyle } from "./styles";

export const TaskBox = (taskArray) => {
    return (
        <View style={TaskBoxStyle.taskListContainer}>
            {taskArray.taskArray.map((item) => (
                <Text key={item.id} style={TaskBoxStyle.taskListItem}>{item.value}</Text>
            ))}
        </View>
        )
}