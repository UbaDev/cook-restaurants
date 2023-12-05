import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Modal, Button, Touchable, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/button/CustomButton';
import { ENV } from '../../utils/constants';
import { auth, db } from '../../utils/db';
import { doc, getDoc, updateDoc, setDoc, getDocs, collection, addDoc, query, where, DocumentReference } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';





export default function ProductDetailStack({route}) {
    const place = route.params.place;
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState('Reseñas');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [comment, setComment] = useState("");
    const [reviews, setReviews] = useState();
    const [name, setName] = useState("");
    const [raiting, setRaiting] = useState(0); 
    const handleRaitingPress = (value) => {
        setRaiting(value);
        addRaitingToFirestore(); 
        hideModal(); 
    };


useEffect(() => {
    const obtenerNombreDeUsuario = async () => {
        const auth = getAuth();

        onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const userDocRef = doc(db, 'users', user.uid);

                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        const username = userDoc.data().username;
                        setName(username);
                    } else {
                        console.log('El documento del usuario no existe en Firestore');
                    }
                } catch (error) {
                    console.error('Error al obtener el nombre de usuario:', error);
                }
            }
        });
    };

    obtenerNombreDeUsuario();
    
}, [name]);
 

    const hideModal = () => {
        setModalVisible(false);
        setSelectedOption('Reseñas');
    };


    const fetchRestaurantReviewsFromFirestore = async (restaurantName) => {
        const reviewCollectionRef = collection(db, 'reviews');
        const reviewQuery = query(reviewCollectionRef, where('restaurantName', '==', restaurantName));

        try {
            const reviewSnapshot = await getDocs(reviewQuery);
            const restaurantReviews = reviewSnapshot.docs.map(doc => doc.data());

            // Actualiza el estado de las reviews del restaurante con los datos obtenidos
            setReviews(restaurantReviews);
        } catch (error) {
            console.error('Error al obtener las reviews del restaurante de Firestore:', error);
        }
    };

    // Llama a esta función cuando necesites obtener las reviews de un restaurante por nombre (puede ser en useEffect u otro lugar)
    useEffect(() => {
        fetchRestaurantReviewsFromFirestore(place.name);
    }, [place.name]); 

    const hideModal2 = async () => {
        if (comment.trim() !== "") {
            const newReview = {
                author_name: name,
                 relative_time_description: new Date().toLocaleTimeString(), 
                text: comment,
                restaurantName: place.name, // Asocia el comentario al restaurante por nombre
            };

            try {
                // Agrega el nuevo comentario a la colección "reviews"
                await addDoc(collection(db, 'reviews'), newReview);

                // Actualiza el estado de las reviews del restaurante por nombre
                fetchRestaurantReviewsFromFirestore(place.name);
            } catch (error) {
                console.error('Error al agregar el comentario en Firestore:', error);
            }
        }

        setComment("");
        setModalVisible2(false);
        setSelectedOption('Reseñas');
    };

    useEffect(() => {
       
    }, []);


    const handleOptionPress = (option) => {
        setSelectedOption(option);
        if (option === 'Calificar') {
            setModalVisible(true);
        }
        if (option === 'Comentar') {
            setModalVisible2(true);
        }
    };


    const addRaitingToFirestore = async () => {
        if (raiting > 0) {
            const auth = getAuth();
            const user = auth.currentUser;

            if (user) {
                const raitingDocRef = doc(db, 'raiting', user.uid); // Utiliza el ID del usuario como referencia

                try {
                    await setDoc(raitingDocRef, {
                        raiting,
                        username: name,
                        restaurantName: place.name,
                    });
                } catch (error) {
                    console.error('Error al guardar el raiting en Firestore:', error);
                }
            } else {
                console.error('Usuario no autenticado');
            }
        }
    };

    const fetchRaitingFromFirestore = async (userName, restaurantName) => {
        const raitingCollectionRef = collection(db, 'raiting');
        const raitingQuery = query(raitingCollectionRef, where('username', '==', userName), where('restaurantName', '==', restaurantName));

        try {
            const raitingSnapshot = await getDocs(raitingQuery);

            if (!raitingSnapshot.empty) {
                // Obtiene el primer documento de la colección (debería ser único por usuario y restaurante)
                const firstDocument = raitingSnapshot.docs[0];
                const raitingData = firstDocument.data();
                // Devuelve el raiting del usuario para el restaurante específico
                return raitingData.raiting;
            } else {
                // Si no hay datos, devuelve 0 o el valor predeterminado según tu lógica
                return 0;
            }
        } catch (error) {
            console.error('Error al obtener el raiting de Firestore:', error);
            // Maneja el error según tus necesidades
            return 0;
        }
    };

   

    // Llama a esta función cuando necesites obtener el raiting del usuario para el restaurante actual
    useEffect(() => {
        const getRaiting = async () => {
            const userRaiting = await fetchRaitingFromFirestore(name, place.name);
            setRaiting(userRaiting);
        };

        getRaiting();
    }, [name, place.name]); 

    console.log(raiting)



    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{ alignSelf: "center" }}>
                {place?.photos?.[0]?.photo_reference ? (
                    <Image
                        source={{
                            uri:
                                "https://maps.googleapis.com/maps/api/place/photo" +
                                "?maxwidth=400" +
                                "&photo_reference=" +
                                place?.photos?.[0]?.photo_reference +
                                "&key=" + ENV.APIKEY_PLACE
                        }}
                        style={{ width: 300, height: 150, borderRadius: 20 }}
                    />
                ) : (
                    <Image
                        source={require("../../../assets/images/sin-imagen.png")}
                        style={{ width: 140, height: 130, borderRadius: 20, alignSelf: "center" }}
                    />
                )}
            </View>
            <View style={{ marginHorizontal: 40, marginTop: 20 }}>
                <Text style={{ fontSize: 24, }}>{place.name}</Text>
                <Text style={{ fontSize: 16, marginVertical: 5, color: "gray" }}>{place.vicinity}</Text>
            </View>
            <View style={{ marginHorizontal: 40, borderTopWidth: .2, borderTopColor: "rgba(0,0,0,0.2)", marginTop: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={{ backgroundColor: "#EF9F27", borderRadius: 20, marginVertical: 20, padding: 5, width: 70, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10 }}>
                    <Icon name="star" size={20} color="white" />
                    <Text style={{ color: "white", textAlign: "center" }}>{(place.rating).toFixed(1)}</Text>
                </View>
                <TouchableOpacity>
                    <Icon name="heart" size={30} color="#EF9F27" />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", borderTopColor: "rgba(0,0,0,0.4)", borderTopWidth: .2, borderBottomColor: "rgba(0,0,0,0.4)", borderBottomWidth: .2 }}>
                <TouchableOpacity style={{ borderBottomWidth: selectedOption === 'Reseñas' ? 2 : 0, borderBottomColor: selectedOption === 'Reseñas' ? '#EF9F27' : 'transparent', paddingBottom: 5 }} onPress={() => handleOptionPress('Reseñas')}
                >
                    <Text style={{ fontSize: 16, paddingVertical: 15, paddingTop: 20 }}>Reseñas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ borderBottomWidth: selectedOption === 'Calificar' ? 2 : 0, borderBottomColor: selectedOption === 'Calificar' ? '#EF9F27' : 'transparent', paddingBottom: 5 }} onPress={() => handleOptionPress('Calificar')}
                >
                    <Text style={{ fontSize: 16, paddingVertical: 15, paddingTop: 20 }}>Calificar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ borderBottomWidth: selectedOption === 'Comentar' ? 2 : 0, borderBottomColor: selectedOption === 'Comentar' ? '#EF9F27' : 'transparent', paddingBottom: 5 }} onPress={() => handleOptionPress('Comentar')}
                >
                    <Text style={{ fontSize: 16, paddingVertical: 15, paddingTop: 20 }}>Comentar</Text>
                </TouchableOpacity>


            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}
            >
            {reviews?.map((review, index) => (

                <View key={index} style={{ marginHorizontal: 40, marginTop: 20, }}>

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", }}>

                            <Image source={require('../../../assets/images/Image.png')} style={{ marginRight: 15 }} />
                            <View>
                                <Text style={{ padding: 2 }}>{review.author_name}</Text>
                                <View style={{ flexDirection: "row" }}>
                                    {/* Renderiza las estrellas según el raiting obtenido de Firestore */}
                                    {raiting ? (
                                        Array.from({ length: raiting }).map((_, i) => (
                                            <Icon key={i} style={{ marginRight: 5 }} name="star" size={15} color="#EF9F27" />
                                        ))
                                    ) : (
                                        <Text style={{fontSize:12, color: "gray"}}>No hay raiting disponible</Text>
                                    )}
                                </View>
                            </View>

                        </View>

                        <Text style={{ color: "gray" }}>{review.relative_time_description}</Text>
                    </View>
                    <Text style={{ fontSize: 16, marginVertical: 8, marginBottom: 20 }}>{review.text}</Text>
                    <View style={{ height: .5, width: "100%", backgroundColor: "#ccc" }}></View>
                </View>

            ))}
               



            </ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={hideModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 30 }}>Califica al Restaurante</Text>
                        <View style={{ flexDirection: "row" }}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <TouchableOpacity
                                    key={star}
                                    style={{ marginRight: 10 }}
                                    onPress={() => handleRaitingPress(star)}
                                >
                                    <Icon name="star" size={40} color={star <= raiting ? "#EF9F27" : "#ccc"} />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
            </Modal>


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible2}
                onRequestClose={hideModal2}
            >
                <View style={styles.modalContainer2}>
                    <View style={styles.modalContent2}>
                        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 30, textAlign: "center" }}>Agregar un comentario al restaurante</Text>
                        <View style={{ width: "94%" }}>

                            <TextInput
                                multiline={true}
                                value={comment} // Asignar el valor del estado 'comment' al valor del TextInput
                                onChangeText={(text) => setComment(text)} // Actualizar el estado 'comment' al cambiar el texto
                                style={{ backgroundColor: "#F4F5F7", height: "70%", marginBottom: 20, width: "100%", borderRadius: 10, padding: 20, paddingTop: 20 }}
                                placeholder="Agregar un comentario..."
                            />
                            <CustomButton title="Enviar" onPress={hideModal2} />
                        </View>
                    </View>
                </View>
            </Modal>

            
            
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end', 
        margin: 0, 
    
        
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20, 
        borderRadius: 10,
        alignItems: 'center',
        height: 200,
        width: '100%', 
    },

    modalContainer2: {
        flex: 1,
        justifyContent: 'flex-end',
        margin: 0,
        

    },
    modalContent2: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        height: 500,
        width: '100%',
    },
})