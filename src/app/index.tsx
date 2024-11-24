import {View} from "react-native";
import PrimaryButton from "@/src/components/PrimaryButton";
import {useEffect, useState} from "react";
import {initialiseDatabase} from "@/src/storage/database";
import QuotesList from "@/src/components/QuotesList";

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
        <PrimaryButton title={"Add new quote"} />
    </View>
  );
}
