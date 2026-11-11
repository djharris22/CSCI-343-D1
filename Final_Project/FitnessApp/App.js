import { useEffect} from 'react';
import { StyleSheet} from 'react-native';
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "./constants/colors";
import HomeScreen from "./screens/HomeScreen";
import WorkoutDetailScreen from "./screens/WorkoutDetailScreen";
import ArmsWorkoutScreen from "./screens/ArmsWorkoutScreen";
import BackWorkoutScreen from "./screens/BackWorkoutScreen";
import BookmarksScreen from "./screens/BookmarkScreen";
import ChestWorkoutScreen from "./screens/ChestWorkoutScreen";
import LegsWorkoutScreen from "./screens/LegsWorkoutScreen";
import ProgressScreen from "./screens/ProgressScreen";
import ProfileScreen from "./screens/ProfileScreen";

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 3000,
  fade: true,
});

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

// Drawer Navigator nested inside the Home tab
function HomeDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName='Home' 
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "barge",
          fontSize: 40,
          color: Colors.accent800,
        },
        sceneContainerStyle: { backgroundColor: Colors.primary300 },
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800,
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Workouts",
          drawerLabel: "Home",
          drawerIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          )
        }}
      />
      <Drawer.Screen
        name="Chest"
        component={ChestWorkoutScreen}
        options={{
          title: "Chest Workouts",
          drawerLabel: "Chest",
          drawerIcon: ({ color, size }) => (
            <Entypo name="minus" color={color} size={size} />
          )
        }}
      />
      <Drawer.Screen
        name="Back"
        component={BackWorkoutScreen}
        options={{
          title: "Back Workouts",
          drawerLabel: "Back",
          drawerIcon: ({ color, size }) => (
            <Entypo name="minus" color={color} size={size} />
          )
        }}
      />
      <Drawer.Screen
        name="Legs"
        component={LegsWorkoutScreen} 
        options={{
          title: "Leg Workouts",
          drawerLabel: "Legs",
          drawerIcon: ({ color, size }) => (
            <Entypo name="minus" color={color} size={size} />
          )
        }}
      />
      <Drawer.Screen
        name="Arms"
        component={ArmsWorkoutScreen} 
        options={{
          title: "Arm Workouts",
          drawerLabel: "Arms",
          drawerIcon: ({ color, size }) => (
            <Entypo name="minus" color={color} size={size} />
          )
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={BookmarksScreen}
        options={{
          title: "Saved Workouts",
          drawerLabel: "Favorites",
          drawerIcon: ({ color, size }) => (
            <Entypo name="bookmark" color={color} size={size} />
          )
        }}
      />
    </Drawer.Navigator>
  );
}

// Bottom Tabs Navigator (Home tab contains the Drawer, plus Progress & Profile)
function TabsNavigator() {
  return (
    <Tabs.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "nexa"
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500
        }
      }}
    >
      <Tabs.Screen
        name="HomeTab"
        component={HomeDrawer}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen 
        name="Progress"
        component={ProgressScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="fitness-center" color={color} size={size} />
          ),
          tabBarLabel: "Progress", 
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-circle" color={color} size={size} />
          ),
          tabBarLabel: "Profile", 
        }}
      />
    </Tabs.Navigator>
  );
}

export default function App() {
  const [loaded] = Font.useFonts({
    barge: require("./assets/fonts/Barge-Black.otf"),
    bargeItalic: require("./assets/fonts/Barge-BlackItalic.otf"),
    nexa: require("./assets/fonts/Nexa-ExtraLight.ttf"),
    nexaBold: require("./assets/fonts/Nexa-Heavy.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='TabsScreen'
        screenOptions={{
          headerTintColor: Colors.primary300,
          headerStyle: { backgroundColor: Colors.primary500 },
          contentStyle: { backgroundColor: "black" }
        }}>
        {/* Main Tabs & Drawer Container */}
        <Stack.Screen
          name="TabsScreen"
          component={TabsNavigator}
          options={{
            headerShown: false,
          }}
        />
        {/* Detail Screen (Pushes on top and hides tabs) */}
        <Stack.Screen
          name="workoutScreen"
          component={WorkoutDetailScreen}
          options={{
            headerBackTitleVisible: false,
          }}
        />   
      </Stack.Navigator>
    </NavigationContainer>
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