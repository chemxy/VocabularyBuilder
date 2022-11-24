import { StyleSheet, Text, View } from "react-native";

export default function VocabularyDetailScreen({ route }) {
    const { name, definition } = route.params;
    return (
        <View>
            <Text style={styles.nameBox}>
                {name}
            </Text>
            <Text style={styles.definitionBox}>
                {definition}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    nameBox: {
        margin: 5,
        borderWidth: 1,
        borderRadius: 15,
        padding: 5,
    },
    definitionBox: {
        margin: 5,
        borderWidth: 1,
        borderRadius: 15,
        padding: 5,
    },
})