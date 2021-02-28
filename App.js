import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen'
import SplashScreen from 'react-native-splash-screen'

const Stack = createStackNavigator()

export default function App() {
  React.useEffect(()=>{
    SplashScreen.hide()
  },[])
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RISK PARTNER" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}