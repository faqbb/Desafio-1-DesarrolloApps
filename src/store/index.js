import TasksReducer from "./reducers/Tasks.reducer";
import { combineReducers, createStore } from "redux";

const RootReducer = combineReducers({
    tasks: TasksReducer
})

export default createStore(RootReducer)