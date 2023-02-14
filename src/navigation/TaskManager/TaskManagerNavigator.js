import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TaskManager } from "../../screens/TaskManager";

const Stack = createNativeStackNavigator();

const TaskManagerNavigator = () => {
    <NavigationContainer>
        <Stack.Navigator initialRouteName="TaskManager">
            <Stack.Screen name="TaskManager" component={TaskManager} options={{title: "Task Manager"}}/>
        </Stack.Navigator>
    </NavigationContainer>
}

export default TaskManagerNavigator;