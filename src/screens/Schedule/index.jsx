import { Alert, Text, View } from "react-native";
import { styles } from "./schedule.style";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/Button";
import api from "../../constants/api";
import { horarios } from "../../constants/data"

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

const Schedule = ({ navigation, route }) => {

  const { id_doctor, id_service } = route.params;

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedHour, setSelectedHour] = useState("09:00");  

  const handleBooking = async () => {
    try {
      const response = await api.post("/appointments", {
        id_doctor,
        id_service,
        booking_date: selectedDate,
        booking_hour: selectedHour
      });

      if (response.data?.id_appointment) {
        Alert.alert("Agendamento realizado com sucesso!");
        navigation.popToTop();
      }
    } catch(error) {
      if(error.response?.data.error)
        Alert.alert(error.response.data.error);
      else
        Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Calendar 
          theme={styles.theme}
          onDayPress={(day) => {
            setSelectedDate(day.dateString);
          }}
          markedDates={{
            [selectedDate]: { selected: true }
          }}
          minDate={new Date().toDateString()}
        />

        <View style={styles.containerHour}>
          <Text style={styles.textHour}>Horário</Text>
        </View>
        <View style={styles.containerSelect}>
          <Picker
            selectedValue={selectedHour}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedHour(itemValue);
            }}
            style={styles.picker}
          >
            {
              horarios.map((horario) => (
                <Picker.Item key={horario.value} label={horario.label} value={horario.value} />
              ))
            }
          </Picker>
        </View>
      </View>

      <View>
        <Button text={"Confirmar reserva"} onPress={handleBooking}/>
      </View>
    </View>
  );
}

export default Schedule;