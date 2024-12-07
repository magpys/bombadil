import { useEffect, useState } from "react";
import { initialiseDatabase } from "@/src/storage/database";
import QuotesList from "@/src/components/QuotesList";
import AddNewQuoteModal from "@/src/components/modals/AddNewQuoteModal";
import { getAllQuotes, Quote } from "@/src/storage/quoteRepository";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    initialiseDatabase().then(async () => {
      await fetchQuotes();
    });
  }, []);

  async function fetchQuotes() {
    const newQuotes = await getAllQuotes();
    setQuotes(newQuotes);
  }

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 20,
        marginTop: 10,
      }}
    >
      <QuotesList quotes={quotes} refetchQuotes={fetchQuotes} />
      <AddNewQuoteModal fetchQuotes={fetchQuotes} />
    </GestureHandlerRootView>
  );
}
