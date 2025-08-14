import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";


export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    "banana": require("../assets/fonts/Montserrat,Poppins (1)/Poppins/Poppins-Regular.ttf"),
    "banana-bold": require("../assets/fonts/Montserrat,Poppins (1)/Poppins/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack>
  <Stack.Screen name="index" options={{ title: "FindCEP", headerShown: false, headerTransparent: true }} />
  </Stack>
  )
}