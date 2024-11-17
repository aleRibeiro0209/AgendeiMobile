import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./services.style";
import { doctors_services } from "../../constants/data";
import icon from "../../constants/icon";
import Service from "../../components/Service";

const Services = () => {
  return (
    <View style={styles.container}>

      <View style={styles.banner}>
        <Image source={icon.female} style={styles.icon}/>
        <Text style={styles.name}>Ale</Text>
        <Text style={styles.specialty}>Consulta</Text>
      </View>

      <FlatList 
        data={doctors_services}
        keyExtractor={ (serv) => serv.id_service }
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => {
          return (
            <View>
              <Service
                id_service={item.id_service}
                description={item.description}
                price={item.price}
              />
            </View>
          );
        }}
      />
    </View>
  );
}
export default Services;