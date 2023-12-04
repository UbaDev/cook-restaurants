import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import CustomInput from '../components/input/CutomInput'
import Icon from 'react-native-vector-icons/Ionicons';
import CardItem from '../components/card/CardItem';
import { getPlaces } from '../api/apiPlace';

export default function SearchScreen() {
  const [search, setSearch] = React.useState("");
  const [places, setPlaces] = React.useState([]);

  // Esta función se ejecutará cada vez que cambie el texto en el campo de búsqueda
  const handleSearch = (text) => {
    setSearch(text);

    const location = '20.606898, -100.394212'; // Querétaro
    const radius = 1000;
    const types = "restaurant";
    const query = text; // Utiliza el nuevo texto de búsqueda
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        {/* Llama a handleSearch con el nuevo texto al cambiar */}
        <CustomInput
          placeholder="Buscar restaurantes"
          value={search}
          onChangeText={(text) => handleSearch(text)} // Maneja cambios de texto
        />
        <TouchableOpacity style={styles.icon}>
          <Icon name="close-circle" size={26} color="rgba(0,0,0,0.6)" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.items}>
          {/* Muestra los lugares encontrados */}
          {places.map((place, index) => (
            <CardItem key={index} place={place} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
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
  }
})