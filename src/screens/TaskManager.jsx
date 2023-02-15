import { useState } from "react"
import { View } from "react-native"
import { FlatList } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { TaskManagerStyle } from "../components/TaskManager/styles"
import {TaskBox} from "../components/TaskManager/TaskBox/TaskBox"
import { TaskInputBox } from "../components/TaskManager/TaskInputBox/TaskInputBox"

export const TaskManager = ({navigation}) => {
  const dispatch = useDispatch()
  const finishedTasks = useSelector(state => state.tasks.finishedTasks)
  const pendingTasks = useSelector(state => state.tasks.pendingTasks)


  const renderTasks = ({tasks}) => <TaskBox taskArray={tasks}/>
  const keyExtractor = (item) => item.id.toString()

    return (
            <View style={TaskManagerStyle.container}>
                <TaskInputBox />
                <FlatList
                  data={pendingTasks}
                  renderItem={renderTasks}
                  keyExtractor={keyExtractor}/>
            </View>
            )
}