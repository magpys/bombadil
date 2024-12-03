import {Modal, StyleSheet, View} from "react-native";
import PrimaryButton from "@/src/components/PrimaryButton";
import {useState} from "react";
import {THEME} from "@/src/constants/Theme";
import ThemedText from "@/src/components/ThemedText";
import LinkButton from "@/src/components/LinkButton";

export default function AddNewQuoteModal() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <View>
      <PrimaryButton title={"➕Add new Quote"} onPress={() => setModalOpen(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <ThemedText>This is a Modal!</ThemedText>
              <LinkButton text={"Close Modal"} onPress={() => setModalOpen(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContainer: {
    height: '75%',
    width: '100%',
    backgroundColor: THEME.cardBackground,
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
  }
})