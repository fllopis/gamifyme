import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, FontAwesome6 } from "@expo/vector-icons";
import { Switch } from "react-native-paper";

//Redux
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "./src/redux/store.js";
import { setTheme } from "./src/redux/themeSlice.js";

//Utils
import { getThemeColor } from "./src/utils/utils.js";

import HomeScreen from "./src/screens/home/index.jsx";
import GamificationsScreen from "./src/screens/gamifications/index.jsx";
import HistoryScreen from "./src/screens/history/index.jsx";
import SettingsScreen from "./src/screens/settings/index.jsx";

/**
 * Component APP with navigation and using hook theme to change different colors of menu and header.
 */
const AppWithNavigation = () => {
  //Default vars
  const [isThemeLight, setIsThemeLight] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    setIsThemeLight(theme === "light");
  }, [theme]);

  /**
   * Function that return the correct icon in base to screen.
   * @param {string} screen
   * @param {boolean} focused
   * @param {string} color
   * @param {number} size
   */
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

  /**
   * Function to change between dark or light
   * @param {boolean} e - With true or false if is checked
   * @return nothing
   */
  const onChangeMode = (e) => {
    dispatch(setTheme(e ? "light" : "dark"));
  };

  return (
    <NavigationContainer>
      {/* BOTTOM NAVIGATOR */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: getThemeColor({
            theme,
            getConstrast: true,
          }),
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: getThemeColor({ theme }),
          },
          tabBarIcon: ({ focused, color, size }) => {
            return getIconForScreen({
              screen: route.name.toLowerCase(),
              focused,
              color,
              size,
            });
          },
          headerTintColor: getThemeColor({ theme }),
          headerStyle: {
            backgroundColor: getThemeColor({ theme }),
          },
          headerTitle: () => "",
          headerLeft: () => (
            <TouchableOpacity>
              <FontAwesome6
                name="user-circle"
                color={getThemeColor({
                  theme,
                  getConstrast: true,
                })}
                size={25}
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Switch
              value={isThemeLight}
              color={isThemeLight ? "#f5f5f5" : "#666666"}
              onValueChange={onChangeMode}
              style={{
                transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
                marginRight: 10,
              }}
            />
          ),
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
      <StatusBar style={isThemeLight ? "dark" : "light"} />
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <AppWithNavigation />
    </Provider>
  );
}
