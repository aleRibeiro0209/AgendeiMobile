import { Image, Text, View } from "react-native";
import { styles } from "./appointment.style";
import icon from "../../constants/icon";
import Button from "../Button";

const Appointment = ({ id_appointment, service, doctor, specialty, booking_date, booking_hour }) => {
  return (
    <View style={styles.appointment}>
      <Text style={styles.name}>
        {service} - {doctor}
      </Text>
      <Text style={styles.specialty}>{specialty}</Text>
      <View style={styles.container}>
        <View style={styles.containerBooking}>
          <View style={styles.booking}>
            <Image style={styles.icon} source={icon.calendar} />
            <Text style={styles.textBooking}>{booking_date}</Text>
          </View>
          <View style={styles.booking}>
            <Image style={styles.icon} source={icon.clock} />
            <Text style={styles.textBooking}>{booking_hour}h</Text>
          </View>
        </View>
        <View style={styles.containerButton}>
          <Button theme={"danger"} text={"Cancelar Reserva"} />
        </View>
      </View>
    </View>
  );
}

export default Appointment;