import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import CardFavorites from '../components/card/CardFavorites'



export default function FavoritesScreen() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "white"}}>
      <ScrollView>
        <View style={styles.container}>
          <CardFavorites />
        </View>
      </ScrollView>
      
    </View>
   
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
  }
})