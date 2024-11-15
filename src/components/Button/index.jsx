import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";

const Button = ({ text, theme }) => {

  function teste() {
    Alert.alert("Clicou no nosso botão");
  }

  return (
    <TouchableOpacity 
      style={[
        styles.btn,
        theme === "danger" ? styles.danger : styles.primary
      ]}
      onPress={teste} 
    >
      <Text style={styles.text}>
        { text }
      </Text>
    </TouchableOpacity>
  );
}

export default Button;