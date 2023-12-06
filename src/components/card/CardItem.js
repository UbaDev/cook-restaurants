import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Items from "../../utils/items"
import { ENV } from '../../utils/constants';
import { Icon } from "react-native-elements";

// export default function CardItem() {
//     return (

//         <View style={styles.container}>
//             <TouchableOpacity style={styles.subContainer}>
//                 <Image
//                     style={styles.imagen}
//                     source={require('../../../assets/images/burguer.png')}
//                 />
//                 <View>
//                     <Text style={styles.title}>Burguer King</Text>
//                     <Text style={styles.subTitle}>Restaurante</Text>
//                 </View>

//             </TouchableOpacity>

//         </View>
//     )
// }

export default function CardItem({ place }) {
    useEffect(() => {
        if (place && place.photos && place.photos.length > 0) {
            console.log(place.photos[0].photo_reference);
        }
    }, [place]);

    const photoReference = place?.photos?.[0]?.photo_reference;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.subContainer}>
                <Image
                    style={styles.imagen}
                    source={{
                        uri:
                            "https://maps.googleapis.com/maps/api/place/photo" +
                            "?maxwidth=400" +
                            "&photo_reference=" +
                            photoReference +
                            "&key=" + ENV.APIKEY_PLACE
                    }}
                // source={require('../../../assets/images/burguer.png')}
                />
                <View>
                    <Text style={styles.title}>{place.name}</Text>
                    <Text style={styles.title}>{place.vicinity}</Text>
                    <Text style={styles.subTitle}>{place.category}</Text>
                    <View style={{ backgroundColor: "#EF9F27", borderRadius: 20, marginVertical: 10, padding: 5, width: 70, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10 }}>
                        <Icon name="star" size={20} color="white" />
                        <Text style={{ color: "white", textAlign: "center" }}>{place.rating}</Text>
                    </View>
                    
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 10,
        marginBottom: 15,
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