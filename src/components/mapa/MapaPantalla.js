import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";


export default function MapaPantalla(props) {

console.log(props);



const {lati, longi } = props;

console.log(lati);





  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: lati,
          longitude: longi,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >
        <Marker
          draggable
          coordinate={{
            latitude: lati,
            longitude: longi,
          }}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: "100%",
      height: "100%",
    },
  });
