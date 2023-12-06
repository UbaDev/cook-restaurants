import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { arrayRemove } from 'firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome';
import { db } from '../../utils/db';
import { ENV } from '../../utils/constants';

export default function CardFavorites() {
    const navigation = useNavigation();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            const auth = getAuth();
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const userId = user.uid;
                    const favoritesRef = doc(collection(db, 'favorites'), userId);

                    try {
                        const favoritesDoc = await getDoc(favoritesRef);

                        if (favoritesDoc.exists()) {
                            setFavorites(favoritesDoc.data().places || []);
                        } else {
                            console.log('No hay lugares favoritos para este usuario.');
                        }
                    } catch (error) {
                        console.error('Error al obtener los lugares favoritos:', error);
                    }
                }
            });
        };

        fetchFavorites();
    }, [favorites]);


    // Modifica la función removeFromFavorites para eliminar solo el nombre del lugar
    const removeFromFavorites = async (placeName) => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            const userId = user.uid;
            const favoritesRef = doc(collection(db, 'favorites'), userId);

            try {
                const favoritesDoc = await getDoc(favoritesRef);

                if (favoritesDoc.exists()) {
                    const updatedPlaces = favoritesDoc.data().places.filter((place) => place.name !== placeName);

                    await updateDoc(favoritesRef, {
                        places: updatedPlaces,
                    });

                    console.log('Lugar eliminado de favoritos');
                    Alert.alert('Lugar eliminado de favoritos');
                    setFavorites(updatedPlaces);
                } else {
                    console.log('Documento de favoritos no encontrado');
                }
            } catch (error) {
                console.error('Error al eliminar el lugar de favoritos:', error);
            }
        } else {
            console.log('Usuario no autenticado');
        }
    };


    return (
        <View style={styles.container}>
            {favorites.map((favorite, index) => (
                <View key={index} style={styles.subContainer}>
                    <View style={styles.imageText}>
                        <Image
                            style={styles.imagen}
                            source={{
                                uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${favorite.photoReference}&key=${ENV.APIKEY_PLACE}`,
                            }}
                        />
                        <View>
                            <Text style={styles.title}>{favorite.name}</Text>
                            <Text style={styles.subTitle}>Restaurante</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => removeFromFavorites(favorite.name)}>
                        <Icon name="heart" size={30} color="#EF9F27" />
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 10,
    },
    subContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        marginHorizontal: 20,
        marginVertical: 10
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
    },
    imageText: {
        flexDirection: "row",
        alignItems: "center",
    }
});
