import { AntDesign } from '@expo/vector-icons';
import { Pressable } from "react-native";

export default function () {
    return (
        <Pressable onPress={() => { console.log("pressed"); }} >
            <AntDesign name="delete" size={24} color="black" />
        </Pressable>
    );
}