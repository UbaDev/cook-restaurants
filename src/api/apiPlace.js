
import { ENV } from '../utils/constants';
import axios from 'axios';


const getPlaces = async (location, radius, types, query, region, maxResults) => {
    const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&types=${types}&keyword=${query}&key=${ENV.APIKEY_PLACE}&region=${region}&maxResults=${maxResults}`
    );
    return response.data; 
};


const getPlaceDetails = async (placeId) => {
    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${ENV.APIKEY_PLACE}`
        );
        return response.data;
    } catch (error) {
        console.error('Error al obtener detalles del lugar:', error);
        throw error;
    }
};



export { getPlaces, getPlaceDetails }; 