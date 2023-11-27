import { StyleSheet, Text, View, Image, TextInput} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

export default function SearchMapStack() {
  const navigation = useNavigation();

  const goMaps = () => {
    navigation.navigate("SearchMapNearStack");
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
 
        <View style={styles.perfil}>
          <Image source={require("../../../assets/images/iconmapa.png")} style={styles.image} />
        </View>
        <View style={styles.containertext}>
          <Text style={styles.text1}>Buscar Restaurantes</Text>
          <Text style={styles.text2}>Introduce tu ubicación o permite el acceso a la aplicación</Text>
        </View>

        <TouchableOpacity style={styles.locationButton} onPress={goMaps}>
          <Text style={styles.text3}>Usar mi ubicación</Text>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Icon name="map-pin" size={20} color="rgba(0,0,0,0.2)" style={styles.icon} />
          <TextInput
            placeholder="Codigo Postal"
            style={styles.input}
          />
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  perfil: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  containertext: {
    alignItems: "center",
    marginBottom: 15,
    marginHorizontal: 20,
  },
  text1:{
    fontSize: 26,
    fontWeight: "bold",
    color: "#EF9F27",
    marginBottom: 20,
  },
  text2:{
    fontSize: 16,
    color: "rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  text3:{
    fontSize: 20,
    color: "black",
    textAlign: "center",
    marginLeft: 10,
  },
  locationButton: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#F4F5F7',
    borderRadius: 18,
    borderColor: 'gray',
    width: "90%",
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 20
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F5F7',
    borderRadius: 18,
    borderColor: 'gray',
    width: "90%",
    height: "7%",
    alignSelf: 'center',
    marginVertical: 10,
    marginHorizontal: 20
  },
  input: {
    color: 'gray',
    padding: 10,
    flex: 1,
    fontSize: 20,
    left:10,
  },
  icon: {
    marginRight: 8,
    left: 15,
    fontSize: 20,
  },
});
