import { useEffect, useState } from "react";
import { initialiseDatabase } from "@/src/storage/database";
import QuotesList from "@/src/components/QuotesList";
import AddNewQuoteModal from "@/src/components/modals/AddNewQuoteModal";
import { getAllQuotes, Quote } from "@/src/storage/quoteRepository";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Notifications from "expo-notifications";
import { scheduleDailyQuoteNotification } from "@/src/notifications/scheduleDailyQuoteNotification";

export default function Index() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    initialiseDatabase().then(async () => {
      await fetchQuotes();
    });

    async function setupNotifications() {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert(
          "Please enable notifications in settings to receive daily quotes.",
        );
      }

      await scheduleDailyQuoteNotification();
    }
    setupNotifications().then();
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
