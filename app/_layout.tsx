import { Stack } from "expo-router";
import TabLayout from "./tabs/_layout";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "AORA" }}></Stack.Screen>
      <Stack.Screen name="profile" options={{ title: "Perfil" }}></Stack.Screen>
      <Stack.Screen
        name="settings"
        options={{ title: "Configurações" }}
      ></Stack.Screen>
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
