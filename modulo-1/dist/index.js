"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_utils_1 = require("./math-utils");
const datosPrueba = [10, 12, 15, 100, 14, 18];
const limiteSugerido = 50;
console.log("--- Análisis Estadístico ---");
console.log(`Datos: ${datosPrueba}`);
console.log(`Media: ${(0, math_utils_1.calcularMedia)(datosPrueba)}`);
console.log(`Mediana: ${(0, math_utils_1.calcularMediana)(datosPrueba)}`);
console.log(`Datos sin atípicos (límite ${limiteSugerido}): ${(0, math_utils_1.filtrarAtipicos)(datosPrueba, limiteSugerido)}`);
// Prueba de caso límite
console.log(`Media de array vacío: ${(0, math_utils_1.calcularMedia)([])}`);
