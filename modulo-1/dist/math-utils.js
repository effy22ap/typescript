"use strict";
/**
 * Calcular la media de un array de numeros.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtrarAtipicos = exports.calcularMediana = exports.calcularMedia = void 0;
const calcularMedia = (numeros) => {
    if (numeros.length === 0)
        return null;
    const suma = numeros.reduce((acc, curr) => acc + curr, 0);
    return suma / numeros.length;
};
exports.calcularMedia = calcularMedia;
/**
 * Calcular la mediana de un array
 */
const calcularMediana = (numeros) => {
    if (numeros.length === 0)
        return null;
    const sorted = [...numeros].sort((a, b) => a - b);
    const mitad = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[mitad - 1] + sorted[mitad]) / 2;
    }
    return sorted[mitad];
};
exports.calcularMediana = calcularMediana;
/**
 * Filtar numeros que superen un limite determinado.
 */
const filtrarAtipicos = (numeros, limite) => {
    return numeros.filter(n => n <= limite);
};
exports.filtrarAtipicos = filtrarAtipicos;
