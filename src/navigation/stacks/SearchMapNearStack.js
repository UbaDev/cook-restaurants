import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function SearchMapNearStack() {
  return (
    <View style={{ flex: 1, backgroundColor: "white",  }}>
     <View style={styles.containermapa}>
        <Image source={require("../../../assets/images/Map.png")} style={styles.mapa}/>
     </View>
     

    <View style={{marginHorizontal: 20}}>
    <TouchableOpacity style={{flexDirection: "row", alignItems: "center", marginTop: 30}}>
          <View style={{ backgroundColor: "#EF9F27", height: 14, width: 14, borderRadius: 50}}></View>
          <View>
            <Text style={{ marginLeft: 20 }}>Burguer King - Av. pie de la cuesta</Text>
            <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 12, color: "gray" }}>Restaurante - 13:00 PM</Text>
          </View>
        </TouchableOpacity> 

        <TouchableOpacity style={{flexDirection: "row", alignItems: "center", marginTop: 30,}}>
          <View style={{ backgroundColor: "#EF9F27", height: 14, width: 14, borderRadius: 50}}></View>
          <View>
            <Text style={{ marginLeft: 20 }}>Burguer King - Av. pie de la cuesta</Text>
            <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 12, color: "gray" }}>Restaurante - 13:00 PM</Text>
          </View>
        </TouchableOpacity> 

        <TouchableOpacity style={{flexDirection: "row", alignItems: "center", marginTop: 30,}}>
          <View style={{ backgroundColor: "#EF9F27", height: 14, width: 14, borderRadius: 50}}></View>
          <View>
            <Text style={{ marginLeft: 20 }}>Burguer King - Av. pie de la cuesta</Text>
            <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 12, color: "gray" }}>Restaurante - 13:00 PM</Text>
          </View>
        </TouchableOpacity> 

        <TouchableOpacity style={{flexDirection: "row", alignItems: "center", marginTop: 30,}}>
          <View style={{ backgroundColor: "#EF9F27", height: 14, width: 14, borderRadius: 50}}></View>
          <View>
            <Text style={{ marginLeft: 20 }}>Burguer King - Av. pie de la cuesta</Text>
            <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 12, color: "gray" }}>Restaurante - 13:00 PM</Text>
          </View>
        </TouchableOpacity> 

        <TouchableOpacity style={{flexDirection: "row", alignItems: "center", marginTop: 30,}}>
          <View style={{ backgroundColor: "#EF9F27", height: 14, width: 14, borderRadius: 50}}></View>
          <View>
            <Text style={{ marginLeft: 20 }}>Burguer King - Av. pie de la cuesta</Text>
            <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 12, color: "gray" }}>Restaurante - 13:00 PM</Text>
          </View>
        </TouchableOpacity> 


        

    </View>


    </View>
  );
}

const styles = StyleSheet.create({
  mapa: {
    width: "100%"
  }
})