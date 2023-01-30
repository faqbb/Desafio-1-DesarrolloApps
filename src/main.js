import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { MainMenu } from "./screens/MainMenu";
import { TaskManager } from "./screens/TaskManager"

const App = () => {
const [screen, setScreen] = useState('mainmenu')
const [loaded] = useFonts({
  Oswald: require('../assets/fonts/Oswald-Regular.ttf'),
  OswaldBold: require('../assets/fonts/Oswald-Bold.ttf')
})
let content = <MainMenu setScreen={setScreen}/>
useEffect(() => {
  if(screen == 'taskmanager'){content = <TaskManager/>}
}, [screen])

if(!loaded) {return (<AppLoading/>)
} else {
  return (
    <View>{content}</View>
    )}
  }

export default App