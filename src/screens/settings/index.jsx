import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

//Utils
import { getThemeColor } from "../../utils/utils";

/**
 * Function that return the JSX for SettingsScreen
 * @returns <SettingsScreen />
 */
const SettingsScreen = () => {
  const theme = useSelector((state) => state.theme.theme);
  const themeColor = getThemeColor({ theme });

  return (
    <View style={[styles.container, { backgroundColor: themeColor }]}>
      <Text>SETTINGS - {theme}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SettingsScreen;
