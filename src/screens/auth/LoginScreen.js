import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/db';
import CustomInput from '../../components/input/CutomInput';
import { View, Button, Alert } from 'react-native';
import CustomButton from '../../components/button/CustomButton';
import React, {useState} from 'react';
import * as Yup from 'yup';


export default function LoginScreen() {

  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true).min(8, true)
    }),
    validateOnChange: false,
      onSubmit: values => {
        signInWithEmailAndPassword(auth, values.email, values.password)
          .then(() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "Home" }]
            });

            Alert.alert('Inicio de sesión exitoso', 'Bienvenido a Cook Restaurants');

          })
          .catch(error => {
            alert(error.message);
          });
      }
  });

  return (
    <View>
      <CustomInput
        placeholder="Email"
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
        error={formik.errors.email}
      />

      <CustomInput
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={formik.handleChange('password')}
        value={formik.values.password}
        error={formik.errors.email}
      />
      <View style={{marginTop: 10}}>
        <CustomButton title="Iniciar Sesión" onPress={formik.handleSubmit} />

      </View>
    </View>
  );
}