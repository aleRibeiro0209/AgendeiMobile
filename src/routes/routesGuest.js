import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Account from "../screens/Account";

const Stack = createNativeStackNavigator();

const RoutesGuest = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"login"} component={Login} options={{ headerShown: false }} />
      <Stack.Screen name={"account"} component={Account} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default RoutesGuest;