import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";

const Button = ({ text }) => {

  function teste() {
    Alert.alert("Clicou no nosso botão");
  }

  return (
    <TouchableOpacity onPress={teste} style={styles.btn}>
      <Text style={styles.text}>
        { text }
      </Text>
    </TouchableOpacity>
  );
}

export default Button;