import { StyleSheet, TextInput } from "react-native";
import { THEME } from "@/src/constants/Theme";

type ThemedTextInputProps = {
  text: string;
  setText: (text: string) => void;
  placeholder: string;
  muted?: boolean;
  numberOfLines?: number;
};

export default function ThemedTextInput({
  text,
  setText,
  placeholder,
  muted = false,
  numberOfLines = 3,
}: ThemedTextInputProps) {
  return (
    <TextInput
      style={muted ? styles.mutedInput : styles.input}
      placeholder={placeholder}
      value={text}
      onChangeText={(text) => setText(text)}
      multiline={true}
      numberOfLines={numberOfLines}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    fontSize: 30,
    color: THEME.text,
    width: "100%",
  },
  mutedInput: {
    borderColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    fontSize: 20,
    color: THEME.textSecondary,
    width: "100%",
  },
});
