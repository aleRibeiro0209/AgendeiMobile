import { Alert, Text, View } from "react-native";
import { styles } from "./tabProfile.style";
import { useContext, useEffect, useState } from "react";
import api from "../../constants/api";
import { AuthContext } from "../../contexts/auth"
import Button from "../../components/Button";

const TabProfile = () => {

  const { setUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const loadProfile = async () => {
    try {
      const response = await api.get(`/users/profile`);

      if (response.data?.name) {
        setName(response.data.name);
        setEmail(response.data.email);
      }

    } catch (error) {
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error);
      } else {
        Alert.alert("Ocorreu um erro. Tente novamente mais tarde!");
      }
    }
  }

  const Logout = () => {
    api.defaults.headers.common['Authorization'] = "";
    setUser({});
  }

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>Nome</Text>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>E-mail</Text>
        <Text style={styles.text}>{email}</Text>
      </View>
      <View style={styles.containerButton}>
        <Button text={"Sair"} theme={"danger"} onPress={Logout} />
      </View>
    </View>
  );
}

export default TabProfile;