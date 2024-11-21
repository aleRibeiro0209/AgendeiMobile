import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabHome from "../TabHome";
import TabCalendar from "../TabCalendar";
import TabProfile from "../TabProfile";
import icon from "../../constants/icon";
import { Image } from "react-native";
import { styles } from "./main.style";
import { COLORS } from "../../constants/theme";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 40,
        },
        headerStyle: {
          elevation: 0,
        },
        headerTintColor: COLORS.blue
      }}  
    >
      <Tab.Screen
        name={"Home"}
        component={TabHome}
        options={{
          headerTitleAlign: "center",
          headerTitle: () => {
            return (
              <Image source={icon.logo} style={styles.logo} />
            );
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image 
                source={icon.home} 
                style={[
                  styles.iconBar,
                  focused ? styles.inFocus : styles.noFocus
                ]}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name={"Minhas Reservas"}
        component={TabCalendar}
        options={{
          headerTitleAlign: "center",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image 
                source={icon.calendar} 
                style={[
                  styles.iconBar,
                  focused ? styles.inFocus : styles.noFocus
                ]}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name={"Meu Perfil"}
        component={TabProfile}
        options={{
          headerTitleAlign: "center",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image 
                source={icon.profile} 
                style={[
                  styles.iconBar,
                  focused ? styles.inFocus : styles.noFocus
                ]}
              />
            );
          }
        }}
      />
    </Tab.Navigator>
  );
}

export default Main;