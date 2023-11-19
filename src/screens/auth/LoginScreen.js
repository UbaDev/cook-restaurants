import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInput from '../../components/input/CutomInput'

export default function LoginScreen() {
  return (
    <View style={{marginBottom: 10}}>
      <CustomInput {...{ placeholder: "Correo electrónico" }} />
      <CustomInput
        placeholder="Contraseña"
        secureTextEntry
      />
    </View>
  );
}

const styles = StyleSheet.create({})