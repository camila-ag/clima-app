/**
 * @license MIT
 * @fileoverview Todo lo relacionado con la api, como api_key, api request etc.
 * @copyright Camila Acuña 2023 All rights reserved
 * @author Camila Acuña <cvacunag@gmail.com>
 */

'use strict';

const api_key = "7680ae258453cd776c0d636aded0d8dc";

/**
 * Fetch data from server
 * @param {string} URL API url 
 * @param {Fnction} callback callback
 */

export const fetchData = function(URL, callback){
    fetch(`${URL}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => callback(data));
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric&lang=es`
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airPollution(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    reverseGeo(lat, lon) {
        return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },
    /**
     * 
     * @param {string} query Buscador ej: "Santiago", "Talca"
     * @returns 
     */
    geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}
