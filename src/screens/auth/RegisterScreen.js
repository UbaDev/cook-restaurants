import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {auth, db} from '../../utils/db';
import CustomInput from '../../components/input/CutomInput';
import { View, Alert } from 'react-native';
import CustomButton from '../../components/button/CustomButton';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';



const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Demsasiado corto')
    .max(50, 'Demasiado largo')
    .required('Requerido'),
  email: Yup.string().email('Correo invalido').required('Requerido'),
  password: Yup.string()
    .min(6, 'Demasiado corto')
    .max(50, 'Demasiado largo')
    .required('Requerido'),
});

export default function RegisterScreen() {
  const navigation = useNavigation();

  const formik = useFormik({
    validationSchema: RegisterSchema,
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    onSubmit: values => {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(async (userCredential) => {

          const user = userCredential.user;

          await setDoc(doc(db, "users", user.uid), {
            username: values.username
          });

          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }]
          });

          Alert.alert('Usuario registrado', 'Bienvenido a Cook Restaurants');
          

        })
        .catch((error) => {
          alert(error.message);
        });
    }
  });

  return (
    <View style={{ marginBottom: 10 }}>
      <CustomInput
        placeholder="Nombre de usuario"
        onChangeText={formik.handleChange('username')}
        onBlur={() => formik.handleBlur('username')}
        value={formik.values.username}
        error={formik.errors.username}
      />

      <CustomInput
        placeholder="Correo electrónico"
        onChangeText={formik.handleChange('email')}
        onBlur={() => {
          formik.handleBlur('email')
          console.log(formik)
        }}
        value={formik.values.email}
        error={formik.errors.email}
      />

      <CustomInput
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={formik.handleChange('password')}
        onBlur={() => formik.handleBlur('password')}
        value={formik.values.password}
        error={formik.errors.password}
      />

      <CustomButton title="Registrarse" onPress={formik.handleSubmit} />
    </View>
  );
}