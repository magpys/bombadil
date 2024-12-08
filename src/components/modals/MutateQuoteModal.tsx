import {
  Keyboard,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ThemedTextInput from "@/src/components/ThemedTextInput";
import PrimaryButton from "@/src/components/PrimaryButton";
import LinkButton from "@/src/components/LinkButton";
import { THEME } from "@/src/constants/Theme";
import { useEffect, useState } from "react";
import { Quote } from "@/src/storage/quoteRepository";

type MutateQuoteModalProps = {
  mutateButtonLabel: string;
  mutateQuote: (quote: string, author?: string) => Promise<void>;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  initialQuote?: Quote;
};

export default function MutateQuoteModal({
  mutateButtonLabel,
  mutateQuote,
  modalOpen,
  setModalOpen,
  initialQuote,
}: MutateQuoteModalProps) {
  const [quote, setQuote] = useState<string>(
    initialQuote ? initialQuote.quote : "",
  );
  const [author, setAuthor] = useState<string>(
    initialQuote ? initialQuote.author : "",
  );

  useEffect(() => {
    setQuote(initialQuote ? initialQuote.quote : "");
    setAuthor(initialQuote ? initialQuote.author : "");
  }, [initialQuote]);

  async function submitQuote() {
    await mutateQuote(quote, author);
    setQuote("");
    setAuthor("");
    setModalOpen(false);
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalOpen}
      onRequestClose={() => setModalOpen(false)}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.fieldGroup}>
                <ThemedTextInput
                  text={quote}
                  setText={(text) => setQuote(text)}
                  placeholder={"Enter quote..."}
                />
                <ThemedTextInput
                  text={author}
                  setText={(text) => setAuthor(text)}
                  placeholder={"Enter author..."}
                  muted
                  numberOfLines={2}
                />
              </View>
              <View style={styles.buttonGroup}>
                <PrimaryButton
                  title={mutateButtonLabel}
                  onPress={submitQuote}
                />
                <LinkButton
                  text={"Close Modal"}
                  onPress={() => setModalOpen(false)}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    height: "75%",
    width: "100%",
    backgroundColor: THEME.cardBackground,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalContent: {
    display: "flex",
    flex: 1,
    boxSizing: "border-box",
    flexDirection: "column",
    marginTop: 15,
    marginBottom: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    width: "100%",
    paddingHorizontal: 15,
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    width: "100%",
    paddingHorizontal: 15,
  },
});
