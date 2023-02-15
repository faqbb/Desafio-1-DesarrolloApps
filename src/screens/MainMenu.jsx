import { Button, Text, View } from "react-native"
import { MainMenuStyle } from "../components/MainMenu/styles"
import { colors } from "../constants/colors"
export const MainMenu = ({navigation}) => {
    return (
        <View style={MainMenuStyle.container}>
        <Text style={MainMenuStyle.title}>Bienvenido</Text>
        <View style={MainMenuStyle.buttonBox}>
            <Button 
            style={MainMenuStyle.button}
            onPress={() => {navigation.navigate('TaskManager')}} title='Tareas pendientes'
            color={colors.black}></Button>
            <Button 
            style={MainMenuStyle.button}
            onPress={() => {navigation.navigate('')}} title='Tareas completadas'
            color={colors.black}>
            </Button>
        </View>
    </View>
    )
}