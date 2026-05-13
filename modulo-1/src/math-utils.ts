/**
 * Calcular la media de un array de numeros.
 */

export const calcularMedia = ( numeros: number[]): number | null => {
    if(numeros.length === 0 ) return null;
    const suma = numeros.reduce((acc, curr) => acc + curr, 0);
    return suma / numeros.length;
};

/**
 * Calcular la mediana de un array
 */

export const calcularMediana = (numeros: number[]): number | null => {
    if (numeros.length === 0) return null;
    
    const sorted = [...numeros].sort((a, b) => a - b);
    const mitad = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[mitad - 1] + sorted[mitad]) / 2;
    }
    
    return sorted[mitad];
};

/**
 * Filtar numeros que superen un limite determinado.
 */
export const filtrarAtipicos = (numeros: number[], limite: number): number[] => {
    return numeros.filter(n => n <= limite);
};