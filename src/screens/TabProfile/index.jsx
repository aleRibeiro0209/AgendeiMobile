import { Text, View } from "react-native";
import { styles } from "./tabProfile.style";

const TabProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>Nome</Text>
        <Text style={styles.text}>Alexandre</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>E-mail</Text>
        <Text style={styles.text}>@gmail.com</Text>
      </View>
    </View>
  );
}

export default TabProfile;