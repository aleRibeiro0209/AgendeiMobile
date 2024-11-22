import { Alert, FlatList, View } from "react-native";
import { styles } from "./tabCalendar.style";
import Appointment from "../../components/Appointment";
import { useEffect, useState } from "react";
import api from "../../constants/api";

const TabCalendar = () => {

  const [appointments, setAppointments] = useState([]);

  const loadAppointments = async () => {
    try {
      const response = await api.get(`/appointments`);

      if (response.data) {
        setAppointments(response.data);
      }
    } catch (error) {
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error);
      } else {
        Alert.alert("Ocorreu um erro. Tente novamente mais tarde!");
      }
    }
  }

  const deleteAppointments = async (id_appointment) => {
    try {
      const response = await api.delete(`/appointments/${id_appointment}`);

      if (response.data?.id_appointment) {
        Alert.alert("Agendamento cancelado com sucesso!");
        loadAppointments();
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
    loadAppointments();
  }, []);

  return (
    <View style={styles.container}>
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
              onPress={deleteAppointments}
            />
          );
        }}
      />
    </View>
  );
}

export default TabCalendar;