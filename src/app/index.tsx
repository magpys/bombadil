import {View} from "react-native";
import {useEffect, useState} from "react";
import {initialiseDatabase} from "@/src/storage/database";
import QuotesList from "@/src/components/QuotesList";
import AddNewQuoteModal from "@/src/components/AddNewQuoteModal";

export default function Index() {
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        initialiseDatabase().then(() => setInitialized(true));
    })

    console.log('is initialised?', initialized);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        {initialized && <QuotesList />}
      <AddNewQuoteModal />
    </View>
  );
}
