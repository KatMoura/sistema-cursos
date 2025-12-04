import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/HomeScreen';
import DetalhesScreen from './app/DetalhesScreen';
import InscricaoScreen from './app/InscricaoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
        <Stack.Screen name="Inscricao" component={InscricaoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}