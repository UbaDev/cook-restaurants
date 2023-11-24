import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import CustomInput from '../components/input/CutomInput'
import Icon from 'react-native-vector-icons/Ionicons';
import CardItem from '../components/card/CardItem';
export default function SearchScren() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <CustomInput {...{ placeholder: "Buscar resturantes" }} />
        <TouchableOpacity style={styles.icon}>
          <Icon name="close-circle"  size={26} color="rgba(0,0,0,0.6)" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.items}>
          <CardItem /> 
        </View>
      </ScrollView>
      
      

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "white",
  },
  searchBar: {
    marginHorizontal: 50,
  },
  icon: {
    position: "absolute",
    right: 10, 
    top: 14,

  }, items: {
    marginHorizontal: 25,
    marginVertical: 20,
  }
})