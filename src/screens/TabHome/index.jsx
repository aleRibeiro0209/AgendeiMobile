import { FlatList, Text, View } from "react-native";
import { styles } from "./tabHome.style";
import { doctors } from "../../constants/data";
import Doctor from "../../components/Doctor";

const TabHome = ({ navigation }) => {
  const handleDoctor = (id_doctor, name, specialty, icon) => {
    navigation.navigate("services", { id_doctor, name, specialty, icon });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Agende os seus serviços médicos</Text>
      <FlatList 
        data={doctors}
        keyExtractor={ (doc) => doc.id_doctor }
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => {
          return (
            <Doctor
              id_doctor={item.id_doctor}
              name={item.name}
              specialty={item.specialty}
              icon={item.icon}
              onPress={handleDoctor}
            />
          );
        }}
      />
    </View>
  );
}

export default TabHome;