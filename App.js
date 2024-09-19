import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from "./src/screens/home/index.jsx";
import GamificationsScreen from "./src/screens/gamifications/index.jsx";
import HistoryScreen from "./src/screens/history/index.jsx";
import SettingsScreen from "./src/screens/settings/index.jsx";

const getIconForScreen = ({ screen, focused, color, size }) => {
  switch (screen) {
    case "home":
      return focused ? (
        <MaterialIcons name="home" color={color} size={size} />
      ) : (
        <MaterialIcons name="home" color={color} size={size} />
      );
    case "gamifications":
      return focused ? (
        <MaterialIcons name="sports-esports" color={color} size={size} />
      ) : (
        <MaterialIcons name="sports-esports" color={color} size={size} />
      );
    case "history":
      return focused ? (
        <MaterialIcons name="poll" color={color} size={size} />
      ) : (
        <MaterialIcons name="poll" color={color} size={size} />
      );
    case "settings":
      return focused ? (
        <MaterialIcons name="settings" color={color} size={size} />
      ) : (
        <MaterialIcons name="settings" color={color} size={size} />
      );
  }
};

export default function App() {
  //Default vars
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { backgroundColor: "#fff" },
          tabBarIcon: ({ focused, color, size }) => {
            return getIconForScreen({
              screen: route.name.toLowerCase(),
              focused,
              color,
              size,
            });
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarLabel: "Inicio" }}
        />
        <Tab.Screen
          name="Gamifications"
          component={GamificationsScreen}
          options={{ tabBarLabel: "Gamificaciones" }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{ tabBarLabel: "Historial" }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ tabBarLabel: "Ajustes" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
