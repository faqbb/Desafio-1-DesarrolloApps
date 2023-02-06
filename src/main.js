import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import TaskNavigator from "./navigation/TaskNavigator";

const App = () => {

const [loaded] = useFonts({
  Oswald: require('../assets/fonts/Oswald-Regular.ttf'),
  OswaldBold: require('../assets/fonts/Oswald-Bold.ttf')
})

if(!loaded) return (<AppLoading/>)

  return (
    <TaskNavigator/>
    )}
  

export default App