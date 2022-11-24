import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet } from 'react-native';
import CreateVocabularyScreen from './components/CreateVocabularyScreen';
import DeleteVocabularyIconButton from './components/DeleteVocabularyIconButton';
import VocabularyDetailScreen from './components/VocabularyDetailScreem';
import VocabularyListScreen from './components/VocabularyListScreen';
import VocabularyStoreProvider from './store/vocabularys-store';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <VocabularyStoreProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          animation: 'fade_from_bottom'
        }}>
          <Stack.Screen name="VocabularyList" component={VocabularyListScreen} />
          <Stack.Screen name="CreateVocabulary" component={CreateVocabularyScreen} />
          <Stack.Screen name="VocabularyDetail" component={VocabularyDetailScreen}
            options={{
              headerRight: () => {
                return <DeleteVocabularyIconButton />
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </VocabularyStoreProvider>
  );
}

const styles = StyleSheet.create({

});
