import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";
import { colors } from "./constants/colors";
import MainNavigator from "./navigation";
import { Provider } from "react-redux";
import store from "./store";


const App = () => {

const [loaded] = useFonts({
  oswald: require('../assets/fonts/Oswald-Regular.ttf'),
  oswaldBold: require('../assets/fonts/Oswald-Bold.ttf')
})

if(!loaded) return (
  <View>
    <ActivityIndicator size={"large"} color={colors.background}></ActivityIndicator>
  </View>)

  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
    )}
  

export default App