import {ScrollView, View} from "react-native";
import {Quote} from "@/src/storage/quoteRepository";
import ThemedText from "@/src/components/ThemedText";
import {THEME} from "@/src/constants/Theme";

type QuoteListProps = {
  quotes: Quote[];
}

export default function QuotesList({quotes}: QuoteListProps) {
  return (
    <ScrollView contentContainerStyle={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {quotes.map(quote => (
        <View style={{ backgroundColor: THEME.cardBackground, borderRadius: 8, padding: 10 }}>
          <ThemedText>{quote.quote}</ThemedText>
          <ThemedText muted>{quote.author}</ThemedText>
        </View>
      ))}
    </ScrollView>
  )
}