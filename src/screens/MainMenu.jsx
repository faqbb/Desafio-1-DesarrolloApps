import { Button, Text, View } from "react-native"
import { MainMenuStyle } from "../components/MainMenu/styles"
export const MainMenu = (setScreen) => {
 const switchScreen = (screen) =>{
    setScreen(screen)
 }
    return (
        <View style={MainMenuStyle.container}>
        <Text style={MainMenuStyle.title}>Bienvenido</Text>
        <View style={MainMenuStyle.buttonBox}>
            <Button 
            style={MainMenuStyle.button}
            onPress={switchScreen('taskmanager')}>Tareas</Button>
        </View>
    </View>
    )
}