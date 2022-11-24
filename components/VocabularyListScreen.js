import { useContext } from "react";
import { Button, FlatList, Pressable, Text, View } from "react-native";
import { VocabularyContext } from "../store/vocabularys-store";

export default function VocabularyListScreen({ navigation }) {
    // const navigation = useNavigation();
    const vocabularyContext = useContext(VocabularyContext);

    function addVocabulary() {
        // vocabularyContext.addVocabulary(newvocab);
        navigation.navigate('CreateVocabulary');
    }

    function renderVocabularies(itemData) {
        function navigateToDetail() {
            navigation.navigate('VocabularyDetail', {
                name: itemData.item.name,
                definition: itemData.item.definition
            });
        }

        return (
            <View>
                <Pressable onPress={navigateToDetail} >
                    <Text>{itemData.item.name}</Text>
                </Pressable>
            </View>
        )
    }

    return (
        <View>
            <Button title="add" onPress={addVocabulary} />

            <FlatList
                data={vocabularyContext.vocabularies}
                renderItem={renderVocabularies}
                // another way
                // renderItem={itemData => {
                //     //do something here
                // }}
                keyExtractor={item => item.name}
            />
        </View>
    );
}