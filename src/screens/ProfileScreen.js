import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Modal, Pressable, } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import CustomInput from '../components/input/CutomInput';
import CustomButton from '../components/button/CustomButton';

export default function ProfileScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.perfil}>
        <Image source={require("../../assets/images/logo-image.png")} style={styles.image} />
        <Text style={styles.name}>El kike</Text>
      </View>

      <View style={styles.container1} >
        <Text style={styles.titulo}>General</Text>
        <TouchableOpacity style={styles.cuenta} onPress={() => setModalVisible(true)}>
          <View style={styles.containerper}>
            <FontAwesome name="user" size={22} color="rgba(0,0,0,0.2)" />
            <View style={styles.viewgen}>
              <Text style={styles.text1}>Información de la cuenta</Text>
              <Text style={styles.text1s}>Cambiar la información de la cuenta</Text>
            </View>
          </View>
          <FontAwesome name="chevron-right" size={18} color="rgba(0,0,0,0.2)" />
        </TouchableOpacity>


        <TouchableOpacity style={styles.cuenta2} onPress={() => setModalVisible2(true)}>
          <View style={styles.containerper}>
            <FontAwesome name="lock" size={22} color="rgba(0,0,0,0.2)" />
            <View style={styles.viewgen}>
              <Text style={styles.text1}>Contraseña</Text>
              <Text style={styles.text1s}>Cambiar tu contraseña</Text>
            </View>
          </View>
          <FontAwesome name="chevron-right" size={18} color="rgba(0,0,0,0.2)" />
        </TouchableOpacity>

      </View>

      <View style={styles.container1} >

        <TouchableOpacity style={styles.cuentacs}>
          <View style={styles.containercs}>
            <FontAwesome name="sign-out" size={22} color="rgba(0,0,0,0.2)" />
            <View style={styles.viewgen}>
              <Text style={styles.text1}>Cerrar sesión</Text>
            </View>
          </View>
          <FontAwesome name="chevron-right" size={18} color="rgba(0,0,0,0.2)" />
        </TouchableOpacity>
      </View>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>

          <View style={styles.modalView}>
            <Pressable style={{padding:20}} onPress={() => setModalVisible(!modalVisible)}>
              <View style={[styles.button, styles.buttonClose]}></View>
            </Pressable>
            <Text style={styles.modalText}>Información de la cuenta</Text>
            <View style={styles.datosview}>
              <Text style={styles.datos}>Nombre Completo</Text>
              <CustomInput  placeholder = "Nombre" />
            </View>
            <View style={styles.datosview}>
              <Text style={styles.datos}>Correo electronico</Text>
              <CustomInput {...{ placeholder: "Correo" }} />
            </View>
            <View style={styles.datosview}>
              <Text style={styles.datos} >Teléfono</Text>
              <CustomInput {...{ placeholder: "Teléfono" }} />
            </View>


            <CustomButton title="Actualizar datos" />
          </View>


        </View>

      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible2(!modalVisible2);
        }}>
        <View style={styles.centeredView}>

          <View style={styles.modalView}>
            <Pressable style={{padding:20}} onPress={() => setModalVisible2(!modalVisible2)}>
              <View style={[styles.button, styles.buttonClose]}></View>
            </Pressable>
            <Text style={styles.modalText}>Cambiar Contraseña</Text>
            <View style={styles.datosview}>
              <Text style={styles.datos}>Nueva contraseña</Text>
              <CustomInput  placeholder = "Nueva Contraseña"secureTextEntry />
            </View>
            <View style={styles.datosview}>
              <Text style={styles.datos}>Repetir Contraseña</Text>
              <CustomInput {...{ placeholder: "Repetir contraseña" }} secureTextEntry/>
            </View>
            


            <CustomButton title="Actualizar Contraseña" />
          </View>


        </View>

      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },

  perfil: {
    padding: 15,
    borderTopColor: 'gray',
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    borderRadius: 200,
    width: 120,
    height: 120,
  },
  name: {
    fontSize: 28,

  },
  container1: {
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 55,
    backgroundColor: '#ffffff',
    width: '90%',
  },
  cuenta: {
    padding: 15,
    marginHorizontal: 8,
    paddingVertical: 25,
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    borderTopWidth: 0.5,
    borderTopColor: 'gray',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cuenta2: {
    padding: 15,
    marginHorizontal: 8,
    paddingVertical: 25,
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    borderTopWidth: 0.5,
    borderTopColor: 'gray',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titulo: {
    alignItems: 'center',
    padding: 10,
    fontSize: 23,
    fontWeight: 'bold',
    marginLeft: 10,

  },


  text1: {
    paddingVertical: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text1s: {
    fontSize: 15,
    color: 'gray',
  },
  contraseña: {
    borderTopWidth: 0.5,
    borderTopColor: 'gray',
  },
  containerper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewgen: {
    marginLeft: 30,
  },
  containercs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cuentacs: {
    padding: 15,
    marginHorizontal: 8,
    paddingVertical: 5,
    flexDirection: 'row',
    borderTopColor: 'gray',
    alignItems: 'center',
    justifyContent: 'space-between',
  }, centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: "100%",
    height: "100%",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {

    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: "rgba(0,0,0,0.1)",
    width: 50,
    height: 8,
    alignSelf: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 40,
    textAlign: 'center',
  },
  datos: {
    marginVertical: 15,
    fontSize: 18,
    color: 'rgba(0,0,0, 0.5)',
  },
  datosview:{
    paddingVertical: 20,
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(0,0,0, 0.1)',
  },




})