import { createContext, useState } from "react";

export const VocabularyContext = createContext({
    vocabularies: [], // this is used to store all vocabularies
    addVocabulary: (newVocabulary) => { },
    removeVocabulary: (vocabularyId) => { }
})

export default function VocabularyStoreProvider({ children }) {

    const [vocabularies, setVocabularies] = useState([]);

    //return true if sucess, otherwise false
    function addVocabulary(newVocabulary) {
        console.log("adding")
        console.log(newVocabulary);
        //TODO add checking for duplicates / unique ids
        setVocabularies((current) => [...current, newVocabulary]);
        return true;
    }

    function removeVocabulary(vocabularyId) {
        console.log("removing")
        setVocabularies((current) =>
            current.filter((item) => item !== vocabularyId)
        );
    }

    const value = {
        vocabularies: vocabularies,
        addVocabulary: addVocabulary,
        removeVocabulary: removeVocabulary
    }

    return <VocabularyContext.Provider value={value}>{children}</VocabularyContext.Provider>
}