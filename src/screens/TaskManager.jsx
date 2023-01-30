import { useState } from "react"
import { View } from "react-native"
import { TaskManagerStyle } from "../components/TaskManager/styles"
import {TaskBox} from "../components/TaskManager/TaskBox/TaskBox"
import { TaskInputBox } from "../components/TaskManager/TaskInputBox/TaskInputBox"

export const TaskManager = () => {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])

    const onHandlerSubmit = () => {
        setTasks([
          ...tasks,
          {
            id: Math.random().toString(),
            value: task
          }
        ])
        setTask('')
      }

    return (
            <View style={TaskManagerStyle.container}>
                <TaskInputBox task={task} setTask={setTask} onPress={onHandlerSubmit}/>
                <TaskBox taskArray={tasks}/>
            </View>
            )
}