import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const myDefaultTheme = {
  ...DefaultTheme,
  dark: false,
};

export const myDarkTheme = {
  ...DarkTheme,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "#333333",
    card: "#333333",
    text: "#ffffff",
    border: "#cccccc",
    notification: "rgb(255, 69, 58)",
  },
};
