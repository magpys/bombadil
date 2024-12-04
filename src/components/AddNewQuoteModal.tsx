import {Keyboard, Modal, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import PrimaryButton from "@/src/components/PrimaryButton";
import {useState} from "react";
import {THEME} from "@/src/constants/Theme";
import LinkButton from "@/src/components/LinkButton";
import ThemedTextInput from "@/src/components/ThemedTextInput";
import {addNewQuote} from "@/src/storage/quoteRepository";

type AddNewQuoteModalProps = {
  fetchQuotes: () => Promise<void>;
};

export default function AddNewQuoteModal({ fetchQuotes }: AddNewQuoteModalProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [quote, setQuote] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  async function submitQuote() {
    await addNewQuote(quote, author);

    setQuote("");
    setAuthor("");

    await fetchQuotes();

    setModalOpen(false);
  }

  return (
    <View style={styles.addButtonSpace}>
      <PrimaryButton title={"➕Add new Quote"} onPress={() => setModalOpen(true)} />
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
                    <PrimaryButton title={"➕Add"} onPress={submitQuote} />
                    <LinkButton text={"Close Modal"} onPress={() => setModalOpen(false)} />
                  </View>
                </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  addButtonSpace: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    height: '75%',
    width: '100%',
    backgroundColor: THEME.cardBackground,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalContent: {
    display: 'flex',
    flex: 1,
    boxSizing: 'border-box',
    flexDirection: 'column',
    marginTop: 15,
    marginBottom: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondaryButton: {
    color: THEME.accent,
    backgroundColor: THEME.textAccent,
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    paddingHorizontal: 15,
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
    width: '100%',
    paddingHorizontal: 15,
  }
})