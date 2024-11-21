import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../screens/Main";
import Services from "../screens/Services";
import Schedule from "../screens/Schedule";
import { COLORS } from "../constants/theme";

const Stack = createNativeStackNavigator();

const RoutesAuth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"main"} component={Main} options={{ headerShown: false }} />
      <Stack.Screen
        name={"services"} 
        component={Services}
        options={{
          headerTitle: "Serviços",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTintColor: COLORS.white,
          headerStyle: {
            backgroundColor: COLORS.blue
          }
        }}
      />
      <Stack.Screen
        name={"schedule"}
        component={Schedule}
        options={{
          headerTitle: "Fazer uma reserva",
          headerTitleAlign: "center",
          headerTintColor: COLORS.blue,
          headerShadowVisible: false
        }}
      />
    </Stack.Navigator>
  );
}

export default RoutesAuth;