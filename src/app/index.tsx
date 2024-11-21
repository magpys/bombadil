import {View} from "react-native";
import PrimaryButton from "@/src/components/PrimaryButton";
import {useEffect} from "react";
import {initialiseDatabase} from "@/src/storage/database";

export default function Index() {
    useEffect(() => {
        initialiseDatabase().then(() => console.log('Database Initialized.'));
    })

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <PrimaryButton title={"Add new quote"} />
    </View>
  );
}
