import { Stack } from "expo-router";

export default function RootLayout() {
  // return <Stack />;
  return (
    <Stack>
  <Stack.Screen name="index" options={{ title: "FindCEP", headerShown: false, headerTransparent: true }} />
  </Stack>
  )
}