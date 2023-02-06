import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TaskManager } from "../screens/TaskManager";
import { MainMenu } from "../screens/MainMenu";

const Stack = createNativeStackNavigator();

const TaskNavigator = () => {
    <NavigationContainer>
        <Stack.Navigator initialRouteName="MainMenu">
            <Stack.Screen name="MainMenu" component={MainMenu}/>
            <Stack.Screen name="TaskManager" component={TaskManager}/>
        </Stack.Navigator>
    </NavigationContainer>
}

export default TaskNavigator;