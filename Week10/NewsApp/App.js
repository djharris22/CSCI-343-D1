
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcon,
} from "@expo/vector-icons";

import NewsDetailScreen from "./screens/NewsDetailScreen";
import BookmarksScreen from "./screens/BookmarksScreen";
import USNewsScreen from "./screens/USNewsScreen";
import WorldNewsScreen from "./screens/WorldNewsScreen";
import SportsNewsScreen from "./screens/SportsNewsScreen";
import Colors from "./constants/colors";

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 3000,
  fade: true,
});

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

function DrawerNavigator(){
  return(
    <Drawer.Navigator
    initialRouteName='News'
    screenOptions={{
      headerStyle: {backgroundColor: Colors.primary500},
      headerTintColor: "white",
      headerTitleStyle: {
        fontFamily: "nolluqa",
        fontSize: 50,
        color: Colors.accent800,
      },
      sceneContainerStyle: {backgroundColor: Colors.primary300},
      drawerContentStyle: {backgroundColor: Colors.primary500},
      drawerInactiveTintColor: Colors.primary300,
      drawerActiveTintColor: Colors.accent500,
      drawerActiveBackgroundColor: Colors.primary800,
    }}>
      <Drawer.Screen
      name="News"
      component={TabsNavigator}
      options={{
        title: "News",
        drawerLabel: "News",
        drawerIcon: ({color, size}) => (
          <Entypo name="list" color={color} size={size}/>
        )
      }}
      />
      <Drawer.Screen
      name="BookmarkedNews"
      component={BookmarksScreen}
      options={{
        title: "Saved News",
        drawerLabel: "Saved News",
        drawerIcon: ({color, size}) => (
          <Entypo name="bookmark" color={color} size={size}/>
        )
      }}
      />
    </Drawer.Navigator>
  )
}
function TabsNavigator(){
  return(
    <Tabs.Navigator
    screenOptions={{
      tabBarShowLabel: true,
      tabBarActiveBackgroundColor: Colors.primary800,
      tabBarActiveTintColor: Colors.accent500,
      tabBarInactiveBackgroundColor: Colors.primary500,
      tabBarInactiveTintColor: Colors.primary300,
      tabBarLabelStyle: {
        fontSize: 12,
        fontFamily: "playfairBold"
      },
      tabBarStyle: {
        backgroundColor: Colors.primary500
      }
    }}
    >
      <Tabs.Screen
      name="USNews"
      component={USNewsScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <Entypo name="home" color={color} size={size}/>
        ),
        tabBarLabel: "US",
      }}
      />
      <Tabs.Screen 
      name="WorldNews"
      component={WorldNewsScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="public" color={color} size={size}/>
        ),
        tabBarLabel: "Wolrd",
      }}/>
      <Tabs.Screen
      name="SportsNews"
      component={SportsNewsScreen} 
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="sports-football" color={color} size={size}/>
        ),
        tabBarLabel: "Sports",
      }}/>
    </Tabs.Navigator>
  )
}
export default function App() {
  // font, splashscreen, loading
  const [loaded] = Font.useFonts({
    playfair: require("./assets/fonts/Playfair.ttf"),
    playfairbold: require("./assets/fonts/PlayfairBold.ttf"),
    playfairItalic: require("./assets/fonts/PlayfairBoldItalic.ttf"),
    nolluqa: require("./assets/fonts/NolluqaRegular.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded){
    return null;
  }
  
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='DrawerScreen'
      screenOptions={{
        headerTintColor: Colors.primary300,
        headerStyle: { backgroundColor: Colors.primary500},
        contentStyle: { backgroundColor: "black"}
      }}>
        <Stack.Screen
          name="DrawerScreen"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
          />
        <Stack.Screen
          name="NewsDetail"
          component={NewsDetailScreen}
          options={{
            headerBackTitleVisible: false,
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
