import { createContext, useState } from "react";

export const VocabularyStore = createContext({
    vocabularies: [],
    addVocabulary: (newVocabulary) => { },
    removeVocabulary: (vocabularyId) => { }
})

export default function VocabularyStoreProvider({ children }) {
    const [vocabularies, setVocabularies] = useState([]);

    function addVocabulary(newVocabulary) {
        setVocabularies((current) => [...current, newVocabulary]);
    }

    function removeVocabulary(vocabularyId) {
        setVocabularies((current) =>
            current.filter((item) => item !== vocabularyId)
        );
    }

    const value = {
        vocabularies: vocabularies,
        addVocabulary: addVocabulary,
        removeVocabulary: removeVocabulary
    }

    return <VocabularyStore.Provider value={value}>{children}</VocabularyStore.Provider>
}