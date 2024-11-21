import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./doctor.style";
import icone from "../../constants/icon";

const Doctor = ({ id_doctor, name, specialty, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.doctor} onPress={() => onPress(id_doctor, name, specialty, icon)}>
      <Image source={icon === "F" ? icone.female : icone.male} style={styles.icon} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Doctor;