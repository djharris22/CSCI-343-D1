
import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useState} from 'react';
import { useFonts } from 'expo-font';

import Colors from './constants/colors';
import BaseScreen from './screens/BaseScreen';
import MenuScreen from './screens/MenuScreen';

export default function App() {

  const [fontsLoaded] = useFonts({
    "squealer": require("./assets/fonts/Squealer.otf"),
    "squealer-embossed": require("./assets/fonts/SquealerEmbossed.otf")
  })

  const [currentScreen, setCurrentScreen] = useState("base");

  function MenuScreenHandler () {
    setCurrentScreen("Menu");
  }
  function BaseScreenHander(){
    setCurrentScreen("base");
  }

  let screen = <BaseScreen onNext={MenuScreenHandler}/>;

  if (currentScreen == "Menu") {
    screen = <MenuScreen  onNext={BaseScreenHander}/>;
  }
  return (
    <>
    <StatusBar style='light'/>
    <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
