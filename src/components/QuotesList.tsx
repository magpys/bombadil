import {Pressable, ScrollView, StyleSheet} from "react-native";
import {Quote} from "@/src/storage/quoteRepository";
import ThemedText from "@/src/components/ThemedText";
import {THEME} from "@/src/constants/Theme";

type QuoteListProps = {
  quotes: Quote[];
}

export default function QuotesList({quotes}: QuoteListProps) {
  return (
    <ScrollView contentContainerStyle={styles.quotesContainer}>
      {quotes.map(quote => (
        <Pressable style={styles.quote} id={quote.id.toString()} onPress={() => alert("Edit goes here!")}>
          <ThemedText>{quote.quote}</ThemedText>
          <ThemedText muted>{quote.author}</ThemedText>
        </Pressable>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  quotesContainer: {
    display: "flex",
    flexDirection: "column",
  },
  quote: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: THEME.border
  }
})
