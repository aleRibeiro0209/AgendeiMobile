import { FlatList, Text, View } from "react-native";
import { styles } from "./tabCalendar.style";
import { appointments } from "../../constants/data";
import icon from "../../constants/icon";
import Appointment from "../../components/Appointment";

const TabCalendar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Teste</Text>

      <FlatList 
        data={appointments}
        keyExtractor={ (appointment) => appointment.id_appointment }
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => {
          return (
            <Appointment 
              id_appointment={item.id_appointment}
              service={item.service}
              doctor={item.doctor}
              specialty={item.specialty}
              booking_date={item.booking_date}
              booking_hour={item.booking_hour}
            />
          );
        }}
      />
    </View>
  );
}

export default TabCalendar;