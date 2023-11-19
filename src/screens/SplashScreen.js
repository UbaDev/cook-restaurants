

import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import CustomButton from "../components/button/CustomButton"; 
import { useNavigation } from "@react-navigation/native";


const height = Dimensions.get("window").height;

const SplashScreen = () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate("Home1");
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../../assets/images/image-splash.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Tus restaurantes favoritos</Text>
        <Text style={styles.subtitle}>
          Encuentra los mejores restaurantes de tu ciudad y calificalos
        </Text>
      </View>
      <CustomButton onPress={() => goToLogin()} title="Comenzar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    justifyContent: "space-around",
    alignItems: "center",
    height: height,
  },
  content: {
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    marginBottom: 30
  },
  subtitle: {
    color: "#7A869A",
    fontSize: 16,
    textAlign: "center",
  },
});

export default SplashScreen;

