import {StyleSheet, TextInput} from "react-native";
import {THEME} from "@/src/constants/Theme";

type ThemedTextInputProps = {
  text: string;
  setText: (text: string) => void;
  placeholder: string;
}

export default function ThemedTextInput({text, setText, placeholder}: ThemedTextInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={text}
      onChangeText={(text) => setText(text)}
      multiline={true}
      numberOfLines={3} />
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    fontSize: 30,
    color: THEME.text,
    width: '100%',
  },
})