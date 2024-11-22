import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon";
import { styles } from "./login.style";
import Button from "../../components/Button";
import { useContext, useState } from "react";
import api from "../../constants/api";
import { AuthContext } from "../../contexts/auth";

const Login = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await api.post("/users/login", {
        email,
        password
      });

      if (response.data) {
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        setUser(response.data);
      }
    } catch(error) {
      if(error.response?.data.error)
        Alert.alert(error.response.data.error);
      else
        Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={icon.logo} style={styles.logo} />
      </View>
      <View>
        <TextInput placeholder="E-mail" style={styles.input} onChangeText={(text) => setEmail(text)} />
        <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
        <Button text={"Acessar"} onPress={handleLogin} />
      </View>
      <View style={styles.footer} >
        <Text style={styles.footerText} >Não tenho conta. </Text>
        <TouchableOpacity onPress={() => { navigation.navigate("account") }}>
          <Text style={styles.footerLink} >Criar conta agora.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;