import { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { VocabularyStore } from "../store/vocabularys-store";

export default function CreateVocabularyScreen({ navigation }) {

    const vocabularyContext = useContext(VocabularyStore);
    const [name, setName] = useState('');
    const [definition, setDefinition] = useState('');

    function addVocabulary() {
        if (vocabularyContext.addVocabulary({
            'name': name,
            'definition': definition
        })) {
            navigation.navigate('VocabularyList');
        }
    }

    return (
        <View>
            <Text>Name</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} />
            <Text>Meaning</Text>
            <TextInput style={styles.input} value={definition} onChangeText={setDefinition} />
            <Button title="Done" onPress={addVocabulary} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});