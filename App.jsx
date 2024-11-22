import { AuthProvider } from "./src/contexts/auth";
import Routes from "./src/routes/routes";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;