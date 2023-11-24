import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Items from "../../utils/items"

export default function CardItem() {
    return (

        <View style={styles.container}>
            <TouchableOpacity style={styles.subContainer}>
                <Image
                    style={styles.imagen}
                    source={require('../../../assets/images/burguer.png')}
                />
                <View>
                    <Text style={styles.title}>Burguer King</Text>
                    <Text style={styles.subTitle}>Restaurante</Text>
                </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.subContainer}>
                <Image
                    style={styles.imagen}
                    source={require('../../../assets/images/burguer.png')}
                />
                <View>
                    <Text style={styles.title}>Burguer King</Text>
                    <Text style={styles.subTitle}>Restaurante</Text>
                </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.subContainer}>
                <Image
                    style={styles.imagen}
                    source={require('../../../assets/images/burguer.png')}
                />
                <View>
                    <Text style={styles.title}>Burguer King</Text>
                    <Text style={styles.subTitle}>Restaurante</Text>
                </View>

            </TouchableOpacity>
            <TouchableOpacity style={styles.subContainer}>
                <Image
                    style={styles.imagen}
                    source={require('../../../assets/images/burguer.png')}
                />
                <View>
                    <Text style={styles.title}>Burguer King</Text>
                    <Text style={styles.subTitle}>Restaurante</Text>
                </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.subContainer}>
                <Image
                    style={styles.imagen}
                    source={require('../../../assets/images/burguer.png')}
                />
                <View>
                    <Text style={styles.title}>Burguer King</Text>
                    <Text style={styles.subTitle}>Restaurante</Text>
                </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.subContainer}>
                <Image
                    style={styles.imagen}
                    source={require('../../../assets/images/burguer.png')}
                />
                <View>
                    <Text style={styles.title}>Burguer King</Text>
                    <Text style={styles.subTitle}>Restaurante</Text>
                </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.subContainer}>
                <Image
                    style={styles.imagen}
                    source={require('../../../assets/images/burguer.png')}
                />
                <View>
                    <Text style={styles.title}>Burguer King</Text>
                    <Text style={styles.subTitle}>Restaurante</Text>
                </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.subContainer}>
                <Image
                    style={styles.imagen}
                    source={require('../../../assets/images/burguer.png')}
                />
                <View>
                    <Text style={styles.title}>Burguer King</Text>
                    <Text style={styles.subTitle}>Restaurante</Text>
                </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.subContainer}>
                <Image
                    style={styles.imagen}
                    source={require('../../../assets/images/burguer.png')}
                />
                <View>
                    <Text style={styles.title}>Burguer King</Text>
                    <Text style={styles.subTitle}>Restaurante</Text>
                </View>

            </TouchableOpacity>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 10,
    },
    subContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        marginHorizontal: 20
    },
    imagen: {
        height: 100,
        width: 50,
        marginRight: 20

    }, 
    title: {
        fontSize: 16,
        paddingVertical: 5,
        fontWeight: "400",
    },
    subTitle: {
        paddingVertical: 5,
        color: "#EF9F27"
    }
})