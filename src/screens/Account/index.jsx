import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon";
import { styles } from "./account.style";
import Button from "../../components/Button";

const Account = () => {
  return(
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={icon.logo} />
      </View>
      <View>
        <TextInput placeholder="Nome" style={styles.input} />
        <TextInput placeholder="E-mail" style={styles.input} />
        <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} />
        <Button text={"Criar Conta"} />
      </View>
      <View style={styles.footer}>
          <Text style={styles.footerText}>Já tenho conta. </Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Fazer login.</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

export default Account;