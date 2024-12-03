import {View} from "react-native";
import {useEffect, useState} from "react";
import {getAllQuotes, Quote} from "@/src/storage/quoteRepository";
import ThemedText from "@/src/components/ThemedText";

export default function QuotesList() {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    useEffect(() => {
        getAllQuotes().then(retrievedQuotes => setQuotes(retrievedQuotes))
    })

    console.log(quotes);

    return (
        <View>
            {quotes.map(quote => (
                <ThemedText>{quote.quote} - {quote.author}</ThemedText>
            ))}
        </View>
    )
}