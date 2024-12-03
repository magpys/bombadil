import {Pressable, StyleSheet, Text} from "react-native";
import {THEME} from "@/src/constants/Theme";

type Props = {
    title: string;
    onPress: () => void;
}

export default function PrimaryButton({title, onPress}: Props) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        backgroundColor: THEME.accent,
    },
    text: {
        fontSize: 16,
        color: THEME.textAccent,
        fontWeight: "bold",
    }
})