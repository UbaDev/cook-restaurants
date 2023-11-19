import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "../../components/input/CutomInput";

export default function RegisterScreen() {
  return (
    <View style={{ marginBottom: 10 }}>
      <CustomInput {...{ placeholder: "Nombre de usuario" }} />
      <CustomInput {...{ placeholder: "Correo electrónico" }} />
      <CustomInput placeholder="Contraseña" secureTextEntry />
    </View>
  );
}
