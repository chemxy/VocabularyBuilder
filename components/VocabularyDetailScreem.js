import { Text, View } from "react-native";

export default function VocabularyDetailScreen({ route }) {
    const { name, definition } = route.params;
    return (
        <View>
            <Text>
                {name}
            </Text>
            <Text>
                {definition}
            </Text>
        </View>
    );
}