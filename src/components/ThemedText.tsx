import {StyleSheet, Text} from "react-native";
import {THEME} from "@/src/constants/Theme";
import {ReactNode} from "react";

export default function ThemedText({children}: { children: ReactNode }) {
  return (
    <Text style={styles.themedText}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  themedText: {
    color: THEME.text,
  }
})