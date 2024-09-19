import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

/**
 * Function that return the JSX for HistoryScreen
 * @returns <HistoryScreen />
 */
const HistoryScreen = () => {
  return (
    <View>
      <Text>HISTORY</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default HistoryScreen;
