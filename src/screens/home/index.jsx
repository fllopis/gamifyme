import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

//Utils
import { getThemeColor } from "../../utils/utils";

/**
 * Function that return the JSX for HomeScreen
 * @returns <HomeScreen />
 */
const HomeScreen = () => {
  const theme = useSelector((state) => state.theme.theme);
  const themeColor = getThemeColor({ theme });
  const themeColorInverse = getThemeColor({ theme, getConstrast: true });

  return (
    <View style={[styles.container, { backgroundColor: themeColor }]}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: themeColorInverse }}>HOME - {theme}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});

export default HomeScreen;
