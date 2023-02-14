import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { colors } from "../../constants/colors";
import { MainMenu } from "../../screens/MainMenu";
import { TaskManager } from "../../screens/TaskManager";
import { FontAwesome5 } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons'
import { TabStyle } from "./styles";

const BottomTabs = createBottomTabNavigator()

const TabNavigator = () => (
    <BottomTabs.Navigator 
        initialRouteName="MainMenu"
        screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: TabStyle.container,
            tabBarActiveTintColor: colors.darkRed,
            tabBarInactiveTintColor: colors.white
        }}>
        <BottomTabs.Screen
            name="Inicio"
            component={MainMenu}
            options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <Ionicons name="md-home" size={24} color={colors.white}/> 
                    </View>
                )
            }}    >
        </BottomTabs.Screen>
        <BottomTabs.Screen
            name="Tareas pendientes"
            component={TaskManager}
            options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <FontAwesome5 name="tasks" size={24} color={colors.white}/>  
                    </View> 
                )
            }}>    
        </BottomTabs.Screen>
    </BottomTabs.Navigator>
)

export default TabNavigator