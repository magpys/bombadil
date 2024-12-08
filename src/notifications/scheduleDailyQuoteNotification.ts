import Notifications, {
  SchedulableTriggerInputTypes,
} from "expo-notifications";
import { getRandomQuote } from "@/src/storage/quoteRepository";

export async function scheduleDailyQuoteNotification() {
  const dailyQuote = await getRandomQuote();

  await Notifications.cancelAllScheduledNotificationsAsync(); // Avoid duplicates

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Quote of the Day",
      body: dailyQuote.quote,
      sound: true,
    },
    trigger: {
      hour: 10, // Time for the notification (8:00 AM)
      minute: 30,
      type: SchedulableTriggerInputTypes.DAILY,
    },
  });
}
