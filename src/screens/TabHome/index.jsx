import { FlatList, Text, View } from "react-native";
import { styles } from "./tabHome.style";
import { doctors } from "../../constants/data";
import Doctor from "../../components/Doctor";
import icon from "../../constants/icon";

const TabHome = () => {
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
              name={item.name}
              specialty={item.specialty}
              icon={item.icon === "F" ? icon.female : icon.male}
            />
          );
        }}
      />
    </View>
  );
}

export default TabHome;