import { Text, View } from "react-native";
import { styles } from "./schedule.style";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/Button";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

const Schedule = () => {

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedHour, setSelectedHour] = useState("");

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
            <Picker.Item label={"09:00"} value={"09:00"} />
            <Picker.Item label={"09:30"} value={"09:30"} />
            <Picker.Item label={"10:00"} value={"10:00"} />
          </Picker>
        </View>
      </View>

      <View>
        <Button text={"Confirmar reserva"}/>
      </View>
    </View>
  );
}

export default Schedule;