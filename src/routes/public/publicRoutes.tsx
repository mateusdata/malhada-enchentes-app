import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Home from '../../pages/Home';
import Alert from '../../pages/Alert';





const AppStack = createStackNavigator();
const PublicRoutes = () => {
  return (
    <>
      <StatusBar animated hideTransitionAnimation='fade' style='auto' />
      <AppStack.Navigator screenOptions={{
        headerPressColor: "blue",
        headerStyle: {
          backgroundColor: "#407AFF"
        },

        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
        <AppStack.Screen name="PreLogin" component={Home} options={{
          headerShown: true,
          headerTitle: "Malhada enchentes",
          headerTintColor: "white",
          headerTitleAlign: "center"
        }} />

        <AppStack.Screen name="Alert" component={Alert} options={{
          headerShown: true,
          headerTitle: "Alerta de enchentes",
          headerTintColor: "white",
          headerTitleAlign: "center"
        }} />
      </AppStack.Navigator>

    </>
  )
}
export default PublicRoutes