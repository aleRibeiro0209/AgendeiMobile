import { Alert, FlatList, Image, Text, View } from "react-native";
import { styles } from "./services.style";
import api from "../../constants/api";
import icone from "../../constants/icon";
import Service from "../../components/Service";
import { useEffect, useState } from "react";

const Services = ({ navigation, route }) => {

  const { id_doctor, name, specialty, icon} = route.params;
  const [doctorsServices, setDoctorsServices] = useState([]);

  const handleService = (id_service) => {
    navigation.navigate("schedule", { id_doctor, id_service });
  }

  const loadServices = async () => {
    try {
      const response = await api.get(`/doctors/${id_doctor}/services`);

      if (response.data) {
        setDoctorsServices(response.data);
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
    loadServices();
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.banner}>
        <Image source={icon === "F" ? icone.female : icone.male} style={styles.icon}/>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
      </View>

      <FlatList 
        data={doctorsServices}
        keyExtractor={ (serv) => serv.id_service }
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => {
          return (
            <View>
              <Service
                id_service={item.id_service}
                description={item.description}
                price={item.price}
                onPress={handleService}
              />
            </View>
          );
        }}
      />
    </View>
  );
}
export default Services;