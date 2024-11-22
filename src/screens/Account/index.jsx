import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon";
import { styles } from "./account.style";
import Button from "../../components/Button";
import { useState } from "react";
import api from "../../constants/api";

const Account = ({ navigation }) => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAccount = async () => {
    try {
      const response = await api.post("/users/register", {
        name,
        email,
        password
      });

      if (response.data) {
        Alert.alert("Usuário Cadastrado com sucesso!");
        navigation.goBack();
      }
    } catch(error) {
      if(error.response?.data.error)
        Alert.alert(error.response.data.error);
      else
        Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
    }
  }

  return(
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={icon.logo} />
      </View>
      <View>
        <TextInput placeholder="Nome" style={styles.input} onChangeText={(text) => setName(text)} />
        <TextInput placeholder="E-mail" style={styles.input} onChangeText={(text) => setEmail(text)} />
        <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
        <Button text={"Criar Conta"} onPress={handleAccount} />
      </View>
      <View style={styles.footer}>
          <Text style={styles.footerText}>Já tenho conta. </Text>
          <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <Text style={styles.footerLink}>Fazer login.</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

export default Account;