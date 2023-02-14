import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainMenu } from '../../screens/MainMenu.jsx'

const Stack = createNativeStackNavigator();

const MainMenuNavigator = () => {
    <NavigationContainer>
        <Stack.Navigator initialRouteName="MainMenu">
            <Stack.Screen name="MainMenu" component={MainMenu} options={{title: "Main Menu"}}/>
        </Stack.Navigator>
    </NavigationContainer>
}

export default MainMenuNavigator;