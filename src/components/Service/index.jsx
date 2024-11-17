import { Image, Text, View } from "react-native";
import { styles } from "./service.style";
import icon from "../../constants/icon";
import Button from "../Button";

const Service = ({ id_service, description, price }) => {
  return (
    <View style={styles.service}>
      <View style={styles.containerInfo}>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>
            {
              new Intl.NumberFormat(
                'pt-BR',
                {
                  style: 'currency',
                  currency: 'BRL'
                }
              ).format(price)
            }
          </Text>
      </View>
      <View style={styles.containerButton}>
        <Button text={"Agendar"} />
      </View>
    </View>
  );
}

export default Service;