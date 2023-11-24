import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const navigation = useNavigation();

  const goToMaps = () => {
    navigation.navigate("SearchMapStack");
  }
  return (
    <View style={{ flex: 1,  }}>
      <View style={styles.header}>
        <Text>Home Screen</Text>
      </View>

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
