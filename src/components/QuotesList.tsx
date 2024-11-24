import {View, StyleSheet} from "react-native";
import {useEffect, useState} from "react";
import {getAllQuotes, Quote} from "@/src/storage/quoteRepository";
import {Colors} from "@/src/constants/Colors";

export default function QuotesList() {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    useEffect(() => {
        getAllQuotes().then(retrievedQuotes => setQuotes(retrievedQuotes))
    })

    console.log(quotes);

    return (
        <View>
            {quotes.map(quote => (
                <Text style={styles.text}>{quote.quote} - {quote.author}</Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: Colors.text,
    }
})