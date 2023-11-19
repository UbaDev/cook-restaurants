import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  const goToMaps = () => {
    navigation.navigate("SearchMapStack");
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HomeScreen</Text>

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
});
