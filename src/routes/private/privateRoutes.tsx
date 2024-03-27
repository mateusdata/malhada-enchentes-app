import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../pages/Home';

const Stack = createStackNavigator();

export default function PrivateRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
  
    </Stack.Navigator>
  );
}