import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

/**
 * Function that return the JSX for HomeScreen
 * @returns <HomeScreen />
 */
const HomeScreen = () => {
  return (
    <View>
      <Text>HOME</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;