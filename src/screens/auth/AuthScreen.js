import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import React, { useState } from "react";
import RegisterScreen from "./RegisterScreen";
import LoginScreen from "./LoginScreen";
import CustomButton from "../../components/button/CustomButton";
const height = Dimensions.get('window').height;

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);

  const changeForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../../assets/images/logo-image.png")}
          style={{}}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={{}}>
          <Text
            style={{
              marginVertical: 60,
              textAlign: "center",
            }}
          >
            {isLogin ? (
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                Bienvenido
              </Text>
            ) : (
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                Registrate
              </Text>
            )}
          </Text>

          <View>
            {isLogin ? <LoginScreen /> : <RegisterScreen />}

           
            <Text
              style={{
                marginVertical: 20,
                color: "#7A869A",
                textAlign: "center",
              }}
              onPress={changeForm}
            >
              {isLogin
                ? "¿No tienes cuenta? Regístrate"
                : "¿Ya tienes cuenta? Inicia sesión"}
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    justifyContent: 'center',
  },
});
