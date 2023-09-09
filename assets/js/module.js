/**
 * @license MIT
 * @fileoverview Todas las funciones del module
 * @copyright Camila Acuña 2023 All rights reserved
 * @author Camila Acuña <cvacunag@gmail.com>
 */

'use strict';

export const weekDayNames = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
];

export const monthNames = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic"
];

/**
 * 
 * @param {number} dateUnix Unix fecha en segundos
 * @param {number} timezone Timezone UTC en segundos
 * @returns {string} Date String. formato "Domingo 10, Ene"
 */

export const getDate = function(dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

/**
 * 
 * @param {number} timeUnix Unix fecha en segunopds
 * @param {number} timezone Timezone UTC en segundos
 * @returns {string} Time string. formato "HH:MM AM/PM"
 */
export const getTime = function(timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours %12 || 12}:${minutes} ${period}`
}

/**
 * 
 * @param {number} timeUnix Unix fecha en segunopds
 * @param {number} timezone Timezone UTC en segundos
 * @returns {string} Time string. formato "HH AM/PM"
 */
export const getHours = function(timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours %12 || 12} ${period}`
} 

/**
 * 
 * @param {number} mps Metros por segundo
 * @returns {numer} Kilometros por hora
 */
export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}

export const aqiText = {
    1: {
        level: "Bueno",
        message: "La calidad del aire es considerada satisfactoria, y la contaminación atmosférica tiene poco o nulo riesgo."
    },
    2: {
        level: "Aceptable",
        message: "La calidad del aire es aceptable; sin embargo, puede haber un problema de salud moderado para un número muy pequeño de personas que son inusualmente sensibles a la contaminación atmosférica."
    },
    3: {
        level: "Moderado",
        message: "Personas sensibles pueden experimentar efectos en su salud. Es poco probable que afecte a la población general."
    },
    4: {
        level: "Malo",
        message: "Toda la población puede experimentar efectos en su salud; las personas sensibles pueden experimentar problemas de salud mas serios."
    },
    5: {
        level: "Muy malo",
        message: "Alerta sanitaria de emergencia. Toda la población tiene más probabilidades de verse afectada."
    }
}