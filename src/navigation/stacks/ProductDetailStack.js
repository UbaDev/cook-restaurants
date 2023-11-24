import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Modal, Button, Touchable, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/button/CustomButton';

export default function ProductDetailStack() {
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState('Reseñas');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    const addFavorites = () => {
        navigation.navigate('Favorites');
    };

    const hideModal = () => {
        setModalVisible(false);
        setSelectedOption('Reseñas');
    };

    const hideModal2 = () => {
        setModalVisible2(false);
        setSelectedOption('Reseñas');
    };

    const handleOptionPress = (option) => {
        setSelectedOption(option);
        if (option === 'Calificar') {
            setModalVisible(true);
        }
        if (option === 'Comentar') {
            setModalVisible2(true);
        }
    };
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{ alignSelf: "center" }}>
                <Image source={require('../../../assets/images/imagen.png')} />
            </View>
            <View style={{ marginHorizontal: 40, marginTop: 20 }}>
                <Text style={{ fontSize: 24, }}>Burguer King</Text>
                <Text style={{ fontSize: 16, marginVertical: 5, color: "gray" }}>Av. pie de la cuesta</Text>
            </View>
            <View style={{ marginHorizontal: 40, borderTopWidth: .2, borderTopColor: "rgba(0,0,0,0.2)", marginTop: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={{ backgroundColor: "#EF9F27", borderRadius: 20, marginVertical: 20, padding: 5, width: 70, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10 }}>
                    <Icon name="star" size={20} color="white" />
                    <Text style={{ color: "white", textAlign: "center" }}>4.5</Text>
                </View>
                <TouchableOpacity onPress={addFavorites}>
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
                <View style={{ marginHorizontal: 40, marginTop: 20, }}>

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", }}>

                            <Image source={require('../../../assets/images/Image.png')} style={{ marginRight: 15 }} />
                            <View>
                                <Text style={{padding: 2}}>Yadira Campos</Text>
                                <View style={{flexDirection: "row"}}>
                                    <Icon style={{marginRight: 5}} name="star" size={15} color="#EF9F27" />
                                    <Icon style={{marginRight: 5}} name="star" size={15} color="#EF9F27" />
                                    <Icon style={{marginRight: 5}} name="star" size={15} color="#EF9F27" />
                                    <Icon style={{marginRight: 5}} name="star" size={15} color="#EF9F27" />
                                    <Icon name="star" size={15} color="#EF9F27" />
                                </View>
                            </View>
                            
                        </View>

                        <Text style={{ color: "gray" }}>Hoy, 14:13</Text>
                    </View>
                    <Text style={{ fontSize: 16, marginVertical: 8, marginBottom: 20 }}>Buenos restaurantes, apto para todo mundo</Text>
                    <View style={{ height: .5, width: "100%", backgroundColor: "#ccc" }}></View>
                </View>

                <View style={{ marginHorizontal: 40, marginTop: 20, }}>

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", }}>

                            <Image source={require('../../../assets/images/Image.png')} style={{ marginRight: 15 }} />
                            <View>
                                <Text style={{ padding: 2 }}>Yadira Campos</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Icon style={{ marginRight: 5 }} name="star" size={15} color="#EF9F27" />
                                    <Icon style={{ marginRight: 5 }} name="star" size={15} color="#EF9F27" />
                                    <Icon style={{ marginRight: 5 }} name="star" size={15} color="#EF9F27" />
                                    <Icon style={{ marginRight: 5 }} name="star" size={15} color="#EF9F27" />
                                    <Icon name="star" size={15} color="#EF9F27" />
                                </View>
                            </View>

                        </View>

                        <Text style={{ color: "gray" }}>Hoy, 14:13</Text>
                    </View>
                    <Text style={{ fontSize: 16, marginVertical: 8, marginBottom: 20 }}>Buenos restaurantes, apto para todo mundo</Text>
                    <View style={{ height: .5, width: "100%", backgroundColor: "#ccc" }}></View>
                </View>

                <View style={{ marginHorizontal: 40, marginTop: 20, }}>

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", }}>

                            <Image source={require('../../../assets/images/Image.png')} style={{ marginRight: 15 }} />
                            <View>
                                <Text style={{ padding: 2 }}>Erika Neme</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Icon style={{ marginRight: 5 }} name="star" size={15} color="#EF9F27" />
                                    <Icon style={{ marginRight: 5 }} name="star" size={15} color="#EF9F27" />
                                    <Icon style={{ marginRight: 5 }} name="star" size={15} color="#EF9F27" />
                                    <Icon style={{ marginRight: 5 }} name="star" size={15} color="#EF9F27" />
                                    <Icon name="star" size={15} color="#EF9F27" />
                                </View>
                            </View>

                        </View>

                        <Text style={{ color: "gray" }}>Hoy, 14:13</Text>
                    </View>
                    <Text style={{ fontSize: 16, marginVertical: 8, marginBottom: 20 }}>Buenos restaurantes, apto para todo mundo</Text>
                    <View style={{ height: .5, width: "100%", backgroundColor: "#ccc" }}></View>
                </View>

                <View style={{ marginHorizontal: 40, marginTop: 20, }}>

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", }}>

                            <Image source={require('../../../assets/images/Image.png')} style={{ marginRight: 15 }} />
                            <View>
                                <Text style={{ padding: 2 }}>Enrique Ascencio</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Icon style={{ marginRight: 5 }} name="star" size={15} color="#EF9F27" />
                                    <Icon style={{ marginRight: 5 }} name="star" size={15} color="#EF9F27" />
                                    <Icon style={{ marginRight: 5 }} name="star" size={15} color="#EF9F27" />
                                    <Icon style={{ marginRight: 5 }} name="star" size={15} color="#EF9F27" />
                                    <Icon name="star" size={15} color="#EF9F27" />
                                </View>
                            </View>

                        </View>

                        <Text style={{ color: "gray" }}>Hoy, 14:13</Text>
                    </View>
                    <Text style={{ fontSize: 16, marginVertical: 8, marginBottom: 20 }}>Buenos restaurantes, apto para todo mundo</Text>
                    <View style={{ height: .5, width: "100%", backgroundColor: "#ccc" }}></View>
                </View>

                <View style={{ marginHorizontal: 40, marginTop: 20, }}>

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", }}>

                            <Image source={require('../../../assets/images/Image.png')} style={{ marginRight: 15 }} />
                            <View>
                                <Text style={{ padding: 2 }}>El dani</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Icon style={{ marginRight: 5 }} name="star" size={15} color="#EF9F27" />
                                    <Icon style={{ marginRight: 5 }} name="star" size={15} color="#EF9F27" />
                                    <Icon style={{ marginRight: 5 }} name="star" size={15} color="#EF9F27" />
                                    <Icon style={{ marginRight: 5 }} name="star" size={15} color="#EF9F27" />
                                    <Icon name="star" size={15} color="#EF9F27" />
                                </View>
                            </View>

                        </View>

                        <Text style={{ color: "gray" }}>Hoy, 14:13</Text>
                    </View>
                    <Text style={{ fontSize: 16, marginVertical: 8, marginBottom: 20 }}>Buenos restaurantes, apto para todo mundo</Text>
                    <View style={{ height: .5, width: "100%", backgroundColor: "#ccc" }}></View>
                </View>


            </ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={hideModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={{fontSize: 20, fontWeight: "bold", marginBottom: 30}}>Califica al Restaurante</Text>
                        <View style={{flexDirection: "row"}}>
                            <TouchableOpacity style={{marginRight: 10}} onPress={hideModal}>
                                <Icon name="star" size={40} color="#ccc" />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginRight: 10 }} onPress={hideModal}>
                                <Icon name="star" size={40} color="#ccc" />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginRight: 10 }} onPress={hideModal}>
                                <Icon name="star" size={40} color="#ccc" />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginRight: 10 }} onPress={hideModal}>
                                <Icon name="star" size={40} color="#ccc" />
                            </TouchableOpacity>

                            <TouchableOpacity  onPress={hideModal}>
                                <Icon name="star" size={40} color="#ccc" />
                            </TouchableOpacity>


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

                            <TextInput multiline={true}  style={{ backgroundColor: "#F4F5F7",height: "70%", marginBottom: 20, width: "100%",borderRadius: 10, padding: 20, paddingTop: 20 }} placeholder="Agregar un comentario..." />
                            <CustomButton title="Enviar" onPress={hideModal2}/>
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