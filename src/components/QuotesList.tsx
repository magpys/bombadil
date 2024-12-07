import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { deleteQuote, editQuote, Quote } from "@/src/storage/quoteRepository";
import ThemedText from "@/src/components/ThemedText";
import { THEME } from "@/src/constants/Theme";
import { useState } from "react";
import MutateQuoteModal from "@/src/components/modals/MutateQuoteModal";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type QuoteListProps = {
  quotes: Quote[];
  refetchQuotes: () => Promise<void>;
};

export default function QuotesList({ quotes, refetchQuotes }: QuoteListProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState<Quote | undefined>(
    undefined,
  );

  async function submitQuoteChange(quote: string, author?: string) {
    if (!selectedQuote) {
      return;
    }

    await editQuote(selectedQuote.id, quote, author);

    await refetchQuotes();
  }

  function RightAction(prog: SharedValue<number>, drag: SharedValue<number>) {
    const styleAnimation = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: drag.value + 80 }],
      };
    });

    return (
      <Reanimated.View style={styleAnimation}>
        <View style={styles.rightActionContainer}>
          <Text style={styles.rightAction}>🗑️</Text>
        </View>
      </Reanimated.View>
    );
  }
  return (
    <>
      <ScrollView contentContainerStyle={styles.quotesContainer}>
        {quotes.map((quote) => (
          <Swipeable
            friction={2}
            enableTrackpadTwoFingerGesture
            rightThreshold={40}
            renderRightActions={RightAction}
            key={quote.id}
            onSwipeableOpen={(direction) => {
              if (direction === "right") {
                Alert.alert(
                  "Delete Quote",
                  "Are you sure you want to delete this quote?",
                  [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    {
                      text: "OK",
                      onPress: async () => {
                        await deleteQuote(quote.id);
                        await refetchQuotes();
                      },
                    },
                  ],
                  { cancelable: true },
                );
              }
            }}
          >
            <Pressable
              style={styles.quote}
              id={quote.id.toString()}
              onPress={() => {
                setSelectedQuote(quote);
                setModalOpen(true);
              }}
            >
              <ThemedText>{quote.quote}</ThemedText>
              <ThemedText muted>{quote.author}</ThemedText>
            </Pressable>
          </Swipeable>
        ))}
      </ScrollView>
      <MutateQuoteModal
        mutateButtonLabel={"Update Quote"}
        mutateQuote={submitQuoteChange}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        initialQuote={selectedQuote}
      />
    </>
  );
}

const styles = StyleSheet.create({
  quotesContainer: {
    display: "flex",
    flexDirection: "column",
  },
  quote: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: THEME.border,
  },
  rightAction: {
    fontSize: 40,
  },
  rightActionContainer: {
    width: 80,
    backgroundColor: "red",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
