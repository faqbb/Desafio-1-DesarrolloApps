
import { View, TextInput, Button } from "react-native"
import { TaskInputBoxStyle } from "./styles"

export const TaskInputBox = (task, setTask, onPress) => {
    const textToTask = (text) => {setTask(text)} 
    return (
        <View style={TaskInputBoxStyle.inputContainer}>
            <TextInput  
            placeholder='Inserta una tarea' 
            placeholderTextColor='#fff'
            value={task}
            onChangeText={textToTask}
            />
            <Button 
            color='#ddd5' 
            title='Añadir'
            onPress={onPress} 
            disabled={!task}/>
    </View>            )}
            