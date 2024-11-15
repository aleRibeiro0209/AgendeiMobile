import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./doctor.style";

const Doctor = ({ name, specialty, icon }) => {
  return (
    <TouchableOpacity style={styles.doctor} >
      <Image source={icon} style={styles.icon} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Doctor;