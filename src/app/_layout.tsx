import { Stack } from "expo-router";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <Stack>
        <Stack.Screen name={"index"} options={{ headerTitle: "🪶 Bombadil" }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
