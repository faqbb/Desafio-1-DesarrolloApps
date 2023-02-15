import { taskTypes } from "../types/task.types"

const initialState = {
    finishedTasks: [],
    pendingTasks: []
}
const { SET_FINISHED, ADD_TASK } = taskTypes 
const TasksReducer = (state = initialState, action) => {
    switch(action, type) {
        case SET_FINISHED:
            const taskIndex = state.pendingTasks.findIndex((task) => task.id === action.taskId)
            if(taskIndex === -1) return state
            return {
                ...state,
                finishedTasks: state.finishedTasks.push(state.pendingTasks.find((task) => task.id === taskIndex)),
                pendingTasks: state.pendingTasks.filter((task) => task.id !== taskIndex)
            }
        case ADD_TASK:
            const task = {
                name: action.task.name,
                id: action.task.id
            }
            return {
                ...state,
                pendingTasks: state.pendingTasks.push(task)
            }
        default:
            return state
    }
}

export default TasksReducer