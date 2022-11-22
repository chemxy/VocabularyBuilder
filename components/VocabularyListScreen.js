import { View, Text, FlatList } from "react-native";

export default function VocabularyListScreen() {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
            meaning: "meaning 1"
        },
    ];

    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={itemData => {
                    return (
                        <View>
                            <Text>{itemData.item.title}</Text>
                        </View>
                    )
                }}
                keyExtractor={item => item.id}
            />
        </View>
    );
}