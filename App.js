import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Superwall from '@superwall/react-native-superwall';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // const apiKey = Platform.OS === "ios" ? "pk_02a4c9efa13c7b0fd2198f3a98ecb2fecc9d1d904b61c71f" : "MY_ANDROID_API_KEY"
    const apiKey = "pk_02a4c9efa13c7b0fd2198f3a98ecb2fecc9d1d904b61c71f"
    Superwall.configure(apiKey)
  },[])

  const SUPERWALL_PAYWALL_IDENTIFIER = "example-paywall-f310-2024-11-29";

  const showPaywall = async () => {
    try {
      const result = await Superwall.showPaywall(SUPERWALL_PAYWALL_IDENTIFIER);
      console.log('Paywall Result:', result);
    } catch (error) {
      console.error('Error showing paywall:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Show Paywall" onPress={showPaywall} />
    </View>
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
