import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import {NativeBaseProvider, StatusBar} from 'native-base';
import Houses from './src/screens/Houses';
import HouseDetails from './src/screens/Details';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <NativeBaseProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Houses"
            options={{
              headerShown: true,
              headerTitle: 'Houses',
              headerTitleStyle: {
                color: '#000',
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
            component={Houses}
          />
          <Stack.Screen
            name="HouseDetails"
            options={{
              headerShown: true,
              headerTitle: 'House Details',
              headerTitleStyle: {
                color: '#000',
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
            component={HouseDetails}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;
