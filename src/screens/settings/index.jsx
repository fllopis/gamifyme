import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

/**
 * Function that return the JSX for SettingsScreen
 * @returns <SettingsScreen />
 */
const SettingsScreen = () => {
  return (
    <View>
      <Text>HISTORY</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default SettingsScreen;