import { useContext } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { VocabularyContext } from "../store/vocabularys-store";

export default function VocabularyListScreen({ navigation }) {
    // const navigation = useNavigation();
    const vocabularyContext = useContext(VocabularyContext);

    function addVocabulary() {
        // vocabularyContext.addVocabulary(newvocab);
        navigation.navigate('CreateVocabulary')
    }

    return (
        <View>
            <Button title="add" onPress={addVocabulary} />

            <FlatList
                data={vocabularyContext.vocabularies}
                renderItem={itemData => {
                    return (
                        <View>
                            <Text>{itemData.item.name}</Text>
                        </View>
                    )
                }}
                keyExtractor={item => item.name}
            />
        </View>
    );
}