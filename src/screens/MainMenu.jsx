import { Button, Text, View } from "react-native"
import { MainMenuStyle } from "../components/MainMenu/styles"
export const MainMenu = ({navigation}) => {
    return (
        <View style={MainMenuStyle.container}>
        <Text style={MainMenuStyle.title}>Bienvenido</Text>
        <View style={MainMenuStyle.buttonBox}>
            <Button 
            style={MainMenuStyle.button}
            onPress={() => {navigation.navigate('TaskManager')}}>Tareas</Button>
        </View>
    </View>
    )
}