import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import CreateVocabularyScreen from './components/CreateVocabularyScreen';
import VocabularyListScreen from './components/VocabularyListScreen';
import VocabularyStoreProvider from './store/vocabularys-store';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <VocabularyStoreProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="VocabularyList" component={VocabularyListScreen} />
          <Stack.Screen name="CreateVocabulary" component={CreateVocabularyScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </VocabularyStoreProvider>
  );
}

const styles = StyleSheet.create({

});
