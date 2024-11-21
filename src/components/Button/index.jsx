import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";

const Button = ({ text, theme, onPress }) => {

  return (
    <TouchableOpacity 
      style={[
        styles.btn,
        theme === "danger" ? styles.danger : styles.primary
      ]}
      onPress={onPress} 
    >
      <Text style={styles.text}>
        { text }
      </Text>
    </TouchableOpacity>
  );
}

export default Button;