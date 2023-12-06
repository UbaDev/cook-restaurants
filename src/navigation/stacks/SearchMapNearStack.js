import { StyleSheet, Text, View,Image,TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import MapaPantalla from '../../components/mapa/MapaPantalla'

import CustomInput from '../../components/input/CutomInput'
import Icon from 'react-native-vector-icons/Ionicons';
import CardItem from '../../components/card/CardItem';
import { getPlaces } from '../../api/apiPlace';




export default function SearchMapNearStack(props) {

  const {
    navigation,
    route: { params },
  } = props;

  console.log("lat", params.lat);
  console.log("long", params.long);

  console.log("lat", params.lat);
  console.log("long", params.long);
  
  const [search, setSearch] = React.useState("");
  const [places, setPlaces] = React.useState([]);

  // Esta función se ejecutará cada vez que cambie el texto en el campo de búsqueda
  const handleSearch = (latitud, longitud ) => {
    

    const location = latitud +','+ longitud; // Querétaro
    const radius = 1000;
    const types = "restaurant";
    const query = "food"; // Utiliza el nuevo texto de búsqueda
    const region = "mx:qro";
    const maxResults = 5;

    getPlaces(location, radius, types, query, region, maxResults)
      .then((response) => {
        console.log("este es el response del buscador: ", response);
        setPlaces(response.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleSearch(params.lat, params.long );
  }, []);







console.log("info lugares ", places);


  return (
    <View style={{ flex: 1, backgroundColor: "white",  }}>

      <MapaPantalla lati={params.lat} longi={params.long} style={styles.mapa} />
     

     

      <View style={{marginHorizontal: 20}}>
        <ScrollView style={styles.lista}>
          <View style={styles.items}>
            {/* Muestra los lugares encontrados */}
            {places.map((place, index) => (
              <CardItem key={index} place={place} />
            ))}
          </View>
        </ScrollView>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  searchBar: {
    marginHorizontal: 50,
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 14,

  }, items: {
    marginHorizontal: 25,
    marginVertical: 20,
  }, 
  lista: {
    height: "50%",
    marginTop: 30,
  },
   mapa: {
    height: "50%",
    marginTop: 30,
  }
})