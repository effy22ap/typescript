import { calcularMedia, calcularMediana, filtrarAtipicos } from './math-utils';

const datosPrueba = [10, 12, 15, 100, 14, 18];
const limiteSugerido = 50;

console.log("--- Análisis Estadístico ---");
console.log(`Datos: ${datosPrueba}`);
console.log(`Media: ${calcularMedia(datosPrueba)}`);
console.log(`Mediana: ${calcularMediana(datosPrueba)}`);
console.log(`Datos sin atípicos (límite ${limiteSugerido}): ${filtrarAtipicos(datosPrueba, limiteSugerido)}`);

// Prueba de caso límite
console.log(`Media de array vacío: ${calcularMedia([])}`);