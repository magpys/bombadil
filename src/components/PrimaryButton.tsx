import {Pressable, StyleSheet, Text} from "react-native";
import {Colors} from "@/src/constants/Colors";

type Props = {
    title: string;
}

export default function PrimaryButton({title}: Props) {
    return (
        <Pressable style={styles.button} onPress={() => alert('Hello there!')}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        backgroundColor: Colors.accent,
    },
    text: {
        fontSize: 16,
        color: Colors.textAccent,
        fontWeight: "bold",
    }
})