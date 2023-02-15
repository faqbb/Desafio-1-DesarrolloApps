import { taskTypes } from '../types/task.types'

const { SET_FINISHED, ADD_TASK } = taskTypes

export const setFinished = (id) => {
    type: SET_FINISHED
    taskId: id
}
export const addTask = (taskname) => {
    type: ADD_TASK
    task: {
        name: taskname
        id: Math.floor(Math.random * 8)
    }
}

























