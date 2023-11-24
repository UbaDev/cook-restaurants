import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const navigation = useNavigation();

  const goToMaps = () => {
    navigation.navigate("SearchMapStack");
  }

  const goToDetail = () => {
    navigation.navigate("ProductDetailStack");
  }

  return (
    <View style={{ flex: 1}}>
      
        <View style={{ backgroundColor: "white",paddingTop: 60, paddingBottom: 10,justifyContent: "flex-end", paddingHorizontal: 20}}>
          <Text style={{fontSize: 18, fontWeight: "bold", }}>Categorías</Text>
        </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        
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



        <View style={{ backgroundColor: "white", borderRadius: 20, paddingHorizontal: 20 }}>
          <View style={{ paddingVertical: 30, paddingLeft: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Mejores resturantes</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={{ alignSelf: "center" }} onPress={goToDetail}>
              <Image source={require("../../assets/images/logo.jpeg")} style={{ width: 210, height: 130, borderRadius: 20, }} />
              <Text style={{ fontSize: 18, marginTop: 10, textAlign: "left" }}>Burguer King</Text>
              <Text style={{ fontSize: 14, marginTop: 10, textAlign: "left", color: "gray" }}>Av. pie de la cuesta</Text>
              <View style={{ backgroundColor: "#EF9F27", borderRadius: 20, marginVertical: 10, padding: 5, width: 70, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10 }}>
                <Icon name="star" size={20} color="white" />
                <Text style={{ color: "white", textAlign: "center" }}>4.5</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignSelf: "center", marginHorizontal: 20 }}>
              <Image source={require("../../assets/images/logo.jpeg")} style={{ width: 210, height: 130, borderRadius: 20, }} />
              <Text style={{ fontSize: 18, marginTop: 10, textAlign: "left" }}>Burguer King</Text>
              <Text style={{ fontSize: 14, marginTop: 10, textAlign: "left", color: "gray" }}>Av. pie de la cuesta</Text>
              <View style={{ backgroundColor: "#EF9F27", borderRadius: 20, marginVertical: 10, padding: 5, width: 70, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10 }}>
                <Icon name="star" size={20} color="white" />
                <Text style={{ color: "white", textAlign: "center" }}>4.5</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignSelf: "center", marginHorizontal: 20 }}>
              <Image source={require("../../assets/images/logo.jpeg")} style={{ width: 210, height: 130, borderRadius: 20, }} />
              <Text style={{ fontSize: 18, marginTop: 10, textAlign: "left" }}>Burguer King</Text>
              <Text style={{ fontSize: 14, marginTop: 10, textAlign: "left", color: "gray" }}>Av. pie de la cuesta</Text>
              <View style={{ backgroundColor: "#EF9F27", borderRadius: 20, marginVertical: 10, padding: 5, width: 70, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10 }}>
                <Icon name="star" size={20} color="white" />
                <Text style={{ color: "white", textAlign: "center" }}>4.5</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
         
        </View>

        <View style={{ backgroundColor: "white", borderRadius: 20, marginVertical: 20 }}>
          <View style={{ paddingTop: 30, paddingLeft: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Lista resturantes</Text>
          </View>
          <TouchableOpacity style={{ alignSelf: "center", marginVertical: 20 }}>

            <Image source={require("../../assets/images/logo.jpeg")} style={{ width: 300, height: 180, borderRadius: 20, }} />
            <Text style={{ fontSize: 18, marginTop: 10, textAlign: "left" }}>Burguer King</Text>
            <Text style={{ fontSize: 14, marginTop: 10, textAlign: "left", color: "gray" }}>Av. pie de la cuesta</Text>
            <View style={{ backgroundColor: "#EF9F27", borderRadius: 20, marginVertical: 10, padding: 5, width: 70, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10 }}>
              <Icon name="star" size={20} color="white" />
              <Text style={{ color: "white", textAlign: "center" }}>4.5</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignSelf: "center", marginVertical: 20 }}>

            <Image source={require("../../assets/images/logo.jpeg")} style={{ width: 300, height: 180, borderRadius: 20, }} />
            <Text style={{ fontSize: 18, marginTop: 10, textAlign: "left" }}>Burguer King</Text>
            <Text style={{ fontSize: 14, marginTop: 10, textAlign: "left", color: "gray" }}>Av. pie de la cuesta</Text>
            <View style={{ backgroundColor: "#EF9F27", borderRadius: 20, marginVertical: 10, padding: 5, width: 70, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10 }}>
              <Icon name="star" size={20} color="white" />
              <Text style={{ color: "white", textAlign: "center" }}>4.5</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignSelf: "center", marginVertical: 20 }}>

            <Image source={require("../../assets/images/logo.jpeg")} style={{ width: 300, height: 180, borderRadius: 20, }} />
            <Text style={{ fontSize: 18, marginTop: 10, textAlign: "left" }}>Burguer King</Text>
            <Text style={{ fontSize: 14, marginTop: 10, textAlign: "left", color: "gray" }}>Av. pie de la cuesta</Text>
            <View style={{ backgroundColor: "#EF9F27", borderRadius: 20, marginVertical: 10, padding: 5, width: 70, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10 }}>
              <Icon name="star" size={20} color="white" />
              <Text style={{ color: "white", textAlign: "center" }}>4.5</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignSelf: "center", marginVertical: 20 }}>

            <Image source={require("../../assets/images/logo.jpeg")} style={{ width: 300, height: 180, borderRadius: 20, }} />
            <Text style={{ fontSize: 18, marginTop: 10, textAlign: "left" }}>Burguer King</Text>
            <Text style={{ fontSize: 14, marginTop: 10, textAlign: "left", color: "gray" }}>Av. pie de la cuesta</Text>
            <View style={{ backgroundColor: "#EF9F27", borderRadius: 20, marginVertical: 10, padding: 5, width: 70, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10 }}>
              <Icon name="star" size={20} color="white" />
              <Text style={{ color: "white", textAlign: "center" }}>4.5</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignSelf: "center", marginVertical: 20 }}>

            <Image source={require("../../assets/images/logo.jpeg")} style={{ width: 300, height: 180, borderRadius: 20, }} />
            <Text style={{ fontSize: 18, marginTop: 10, textAlign: "left" }}>Burguer King</Text>
            <Text style={{ fontSize: 14, marginTop: 10, textAlign: "left", color: "gray" }}>Av. pie de la cuesta</Text>
            <View style={{ backgroundColor: "#EF9F27", borderRadius: 20, marginVertical: 10, padding: 5, width: 70, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10 }}>
              <Icon name="star" size={20} color="white" />
              <Text style={{ color: "white", textAlign: "center" }}>4.5</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignSelf: "center", marginVertical: 20 }}>

            <Image source={require("../../assets/images/logo.jpeg")} style={{ width: 300, height: 180, borderRadius: 20, }} />
            <Text style={{ fontSize: 18, marginTop: 10, textAlign: "left" }}>Burguer King</Text>
            <Text style={{ fontSize: 14, marginTop: 10, textAlign: "left", color: "gray" }}>Av. pie de la cuesta</Text>
            <View style={{ backgroundColor: "#EF9F27", borderRadius: 20, marginVertical: 10, padding: 5, width: 70, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10 }}>
              <Icon name="star" size={20} color="white" />
              <Text style={{ color: "white", textAlign: "center" }}>4.5</Text>
            </View>
          </TouchableOpacity>

          
        </View>


      </ScrollView>

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

});
