import {StyleSheet, Text} from "react-native";
import {THEME} from "@/src/constants/Theme";
import {ReactNode} from "react";

type ThemedTextProps = {
  children: ReactNode;
  muted?: boolean;
}

export default function ThemedText({children, muted = false}: ThemedTextProps) {
  return (
    <Text style={muted ? styles.mutedThemedText : styles.themedText}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  themedText: {
    color: THEME.text,
    fontSize: 30,
  },
  mutedThemedText: {
    color: THEME.textSecondary,
    fontSize: 20
  }
})