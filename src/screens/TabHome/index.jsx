import { Alert, FlatList, Text, View } from "react-native";
import { styles } from "./tabHome.style";
import Doctor from "../../components/Doctor";
import { useEffect, useState } from "react";
import api from "../../constants/api";

const TabHome = ({ navigation }) => {

  const [doctors, setDoctors] = useState([]);

  const handleDoctor = (id_doctor, name, specialty, icon) => {
    navigation.navigate("services", { id_doctor, name, specialty, icon });
  }

  const loadDoctors = async () => {
    try {
      const response = await api.get(`/doctors`);

      if (response.data) {
        setDoctors(response.data);
      }
    } catch (error) {
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error);
      } else {
        Alert.alert("Ocorreu um erro. Tente novamente mais tarde!");
      }
    }
  }

  useEffect(() => {
    loadDoctors();
  }, []);

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