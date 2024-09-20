//Function to get the correct theme color: dark or light
export const getThemeColor = ({ theme, getConstrast = false }) => {
  const darkColor = "#333333";
  const lightColor = "white";

  if (getConstrast) {
    return theme === "light" ? darkColor : lightColor;
  }

  return theme === "light" ? lightColor : darkColor;
};
