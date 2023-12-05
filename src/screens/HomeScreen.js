import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Icon } from "react-native-elements";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getDoc, doc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../utils/db';
import { auth } from '../utils/db';
import { getPlaces, getPlaceDetails } from '../api/apiPlace';
import { ENV } from '../utils/constants';
import axios from 'axios';



export default function HomeScreen() {
  const [places, setPlaces] = useState([]);
  const [top5Places, setTop5Places] = useState([]);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    const sortedPlaces = [...places].sort((a, b) => b.rating - a.rating);

    const top5 = sortedPlaces.slice(0, 5);

    setTop5Places(top5);
  }, [places]);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const location = '20.606898, -100.394212';
      const radius = 1000;
      const types = "restaurant";
      const query = "food";
      const region = "mx:qro";
      const maxResults = 5;

      try {
        const response = await getPlaces(location, radius, types, query, region, maxResults);

        if (response && response.results && response.results.length > 0) {
          const placesWithDetails = await Promise.all(
            response.results.map(async (result) => {
              const details = await getPlaceDetails(result.place_id);
              return { ...result, details };
            })
          );

          setPlaces(placesWithDetails);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // El segundo argumento del useEffect es un array de dependencias, aquí está vacío para que se ejecute solo una vez al montar el componente


  const navigation = useNavigation();
  const [name, setName] = useState('');

  const goToMaps = () => {
    navigation.navigate("SearchMapStack");
  }

  const goToDetail = (place) => {
    navigation.navigate("ProductDetailStack", { place });
  }

  const obtenerNombreDeUsuario = async () => {
    const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDocRef = doc(db, 'users', user.uid);

          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const username = userDoc.data().username;
            setName(username);
          } else {
            console.log('El documento del usuario no existe en Firestore');
          }
        } catch (error) {
          console.error('Error al obtener el nombre de usuario:', error);
        }
      }
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      obtenerNombreDeUsuario();
    }, [])
  );

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength) + '...';
    }
  };

  return (
    <View style={{ flex: 1 }}>

      <View style={{ backgroundColor: "white", paddingTop: 60, paddingBottom: 10, justifyContent: "flex-end", paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: "rgba(0,0,0,0.1)" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Bienvenido {name} 👋🏻</Text>


      </View>
      {loading ? <ActivityIndicator style={{ flex: 1, justifyContent: "center", alignSelf: "center" }} size="large" color="#EF9F27" /> : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* {places.map((place) => (
          <View key={place.place_id} style={styles.listItem}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{place.name}</Text>
            <Text style={{ fontSize: 14, color: "#777" }}>{place.vicinity}</Text>
          </View>
        ))} */}
          {/* {console.log(places)} */}
          <View style={{ backgroundColor: "white", paddingHorizontal: 20, paddingTop: 20 }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Categorías</Text>

          </View>
          <View style={styles.header}>



            <View style={{ alignItems: "center" }}>
              <TouchableOpacity style={styles.containerRating}>
                <Image source={require("../../assets/icons/5-estrellas.png")} style={styles.stars} />
              </TouchableOpacity>
              <Text style={{ marginTop: 10 }}>5 estrellas</Text>

            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity style={styles.containerRating}>
                <Image source={require("../../assets/icons/4-estrellas.png")} style={styles.stars} />
              </TouchableOpacity>
              <Text style={{ marginTop: 10 }}>4 estrellas</Text>
            </View>

            <View style={{ alignItems: "center" }}>

              <TouchableOpacity style={styles.containerRating}>

                <Image source={require("../../assets/icons/3-estrellas.png")} style={styles.stars} />
              </TouchableOpacity>
              <Text style={{ marginTop: 10 }}>3 estrellas</Text>

            </View>



          </View>



          <View style={{ backgroundColor: "white", borderRadius: 20, paddingHorizontal: 20, marginTop: 20, marginHorizontal: 20 }}>
            <View style={{ paddingVertical: 30, paddingLeft: 0 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Mejores resturantes</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

              {top5Places.map((place, index) => (
                <View>
                  <TouchableOpacity key={index} style={{ alignSelf: "center", marginRight: 15 }} onPress={() => goToDetail(place)}>
                    {place?.photos?.[0]?.photo_reference ? (
                      <Image
                        source={{
                          uri:
                            "https://maps.googleapis.com/maps/api/place/photo" +
                            "?maxwidth=400" +
                            "&photo_reference=" +
                            place?.photos?.[0]?.photo_reference +
                            "&key=" + ENV.APIKEY_PLACE
                        }}
                        style={{ width: 210, height: 130, borderRadius: 20 }}
                      />
                    ) : (
                      <Image
                        source={require("../../assets/images/sin-imagen.png")}
                        style={{ width: 140, height: 130, borderRadius: 20, alignSelf: "center" }}
                      />
                    )}

                    <Text style={{ fontSize: 18, marginTop: 10, textAlign: "left", }}>
                      {truncateText(place.name, 18)}
                    </Text>
                    <View style={{ width: 200 }}>
                      <Text style={{ fontSize: 14, marginTop: 10, textAlign: "left", color: "gray" }}>{truncateText(place.vicinity, 40)}</Text>
                    </View>
                    <View style={{ backgroundColor: "#EF9F27", borderRadius: 20, marginVertical: 10, padding: 5, width: 70, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10 }}>
                      <Icon name="star" size={20} color="white" />
                      <Text style={{ color: "white", textAlign: "center" }}>{(place.rating).toFixed(1)}</Text>
                    </View>
                  </TouchableOpacity>

                </View>


              ))}
            </ScrollView>

          </View>

          <View style={{ backgroundColor: "white", borderRadius: 20, marginVertical: 20, marginHorizontal: 20 }}>
            <View style={{ paddingTop: 30, paddingLeft: 20 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Lista resturantes</Text>
            </View>

            {places.map((place, index) => (
              <TouchableOpacity key={index} style={{ alignSelf: "center", marginVertical: 20 }} onPress={() => goToDetail(place)}>

                {place?.photos?.[0]?.photo_reference ? (
                  <Image
                    source={{
                      uri:
                        "https://maps.googleapis.com/maps/api/place/photo" +
                        "?maxwidth=400" +
                        "&photo_reference=" +
                        place?.photos?.[0]?.photo_reference +
                        "&key=" + ENV.APIKEY_PLACE
                    }}
                    style={{ width: 300, height: 150, borderRadius: 20 }}
                  />
                ) : (
                  <Image
                    source={require("../../assets/images/sin-imagen.png")}
                    style={{ width: 200, height: 150, borderRadius: 20, alignSelf: "center" }}
                  />
                )}


                <Text style={{ fontSize: 18, marginTop: 10, textAlign: "left" }}> {truncateText(place.name, 30)}</Text>
                <Text style={{ fontSize: 14, marginTop: 10, textAlign: "left", color: "gray" }}>{truncateText(place.vicinity, 40)}</Text>
                <View style={{ backgroundColor: "#EF9F27", borderRadius: 20, marginVertical: 10, padding: 5, width: 70, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10 }}>
                  <Icon name="star" size={20} color="white" />
                  <Text style={{ color: "white", textAlign: "center" }}>{(place.rating).toFixed(1)}</Text>
                </View>
              </TouchableOpacity>
            ))}


          </View>


        </ScrollView>
      )}
     

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => {
          goToMaps();
        }}
      >
        <Icon
          name="location-pin"
          type="entypo"
          color="white"
          size={30}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#EF9F27",
    borderRadius: 50,
    padding: 15,
    elevation: 5,
  },
  header: {
    backgroundColor: "#fff",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

  },
  containerRating: {
    backgroundColor: "#FDEDA5",
    width: 90,
    height: 90,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  stars: {
    width: 50,
    height: 50,
  }

})