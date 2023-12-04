import React, { useEffect, useState } from 'react';
import { ENV } from '../utils/constants';
import axios from 'axios';
import HomeScreen from '../screens/HomeScreen';

// const getPlaces = async (query) => { 
//     console.log("este es el query",query);  
//     const response = await axios.get(
//         // `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&types=${types}&keyword=${query}&key=${ENV.APIKEY_PLACE}&region=${region}&maxResults=${maxResults}`
//         `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&types=${types}&keyword=${query}&key=${ENV.APIKEY_PLACE}&region=${region}&maxResults=${maxResults}`
//     );
//     console.log(response.data);  

//     return response.data;
// };


const getPlaces = async (location, radius, types, query, region, maxResults) => {
    const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&types=${types}&keyword=${query}&key=${ENV.APIKEY_PLACE}&region=${region}&maxResults=${maxResults}`
    );
    return response.data; 
};

export { getPlaces }; 