import {Pressable, StyleSheet, Text} from "react-native";
import {THEME} from "@/src/constants/Theme";

export default function LinkButton({ text, onPress }: {text: string; onPress: () => void}) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "light",
    textDecorationLine: "underline",
    color: THEME.accent,
  }
})