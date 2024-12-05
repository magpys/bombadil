import {View} from "react-native";
import {useEffect, useState} from "react";
import {initialiseDatabase} from "@/src/storage/database";
import QuotesList from "@/src/components/QuotesList";
import AddNewQuoteModal from "@/src/components/AddNewQuoteModal";
import {getAllQuotes, Quote} from "@/src/storage/quoteRepository";

export default function Index() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
      initialiseDatabase().then(async () => {
        await fetchQuotes()
      });
  }, []);

  async function fetchQuotes() {
    const newQuotes = await getAllQuotes();
    setQuotes(newQuotes);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 20,
        marginTop: 10
      }}
    >
      <QuotesList quotes={quotes} />
      <AddNewQuoteModal fetchQuotes={fetchQuotes} />
    </View>
  );
}
