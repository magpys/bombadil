import { StyleSheet, View } from "react-native";
import PrimaryButton from "@/src/components/PrimaryButton";
import { useState } from "react";
import { addNewQuote } from "@/src/storage/quoteRepository";
import MutateQuoteModal from "@/src/components/modals/MutateQuoteModal";

type AddNewQuoteModalProps = {
  fetchQuotes: () => Promise<void>;
};

export default function AddNewQuoteModal({
  fetchQuotes,
}: AddNewQuoteModalProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  async function submitNewQuote(quote: string, author?: string): Promise<void> {
    await addNewQuote(quote, author);

    await fetchQuotes();
  }

  return (
    <View style={styles.addButtonSpace}>
      <PrimaryButton
        title={"➕Add new Quote"}
        onPress={() => setModalOpen(true)}
      />
      <MutateQuoteModal
        mutateButtonLabel={"➕Add Quote"}
        mutateQuote={submitNewQuote}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </View>
  );
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
});
