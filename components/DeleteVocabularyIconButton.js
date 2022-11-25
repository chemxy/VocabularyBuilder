import { AntDesign } from '@expo/vector-icons';
import { Pressable } from "react-native";

export default function DeleteVocabularyIconButton({ name }) {

    function deleteVocabulary() {
        console.log("deleting: " + name)
    }

    return (
        <Pressable onPress={deleteVocabulary} >
            <AntDesign name="delete" size={24} color="black" />
        </Pressable>
    );
}