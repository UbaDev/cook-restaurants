import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

// Set the API key
// GooglePlacesAutocomplete.setAPIKey('AIzaSyAiXx54r-yAJ4Z-rHbzmJZFl-JbwipjJwI');

export default function HomeScreen() {
  const navigation = useNavigation();

  const goToMaps = () => {
    navigation.navigate("SearchMapStack");
  }


  return (
      <GooglePlacesAutocomplete
        placeholder="Ingresa restaurante, bar, etc."
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log('Buscando datos...');
          console.log(data, details);
        }}
        query={{ key: 'AIzaSyAiXx54r-yAJ4Z-rHbzmJZFl-JbwipjJwI', language: 'en', region: 'mx', types: ['restaurant'] }}
        fetchDetails={true}
        onFail={error => console.log(error)}
        onNotFound={() => console.log('no results')}
      />
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
});
