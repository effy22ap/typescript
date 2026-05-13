export interface RespuestasAPI<T> {
    data: T;
    status: number;
    mensaje: string;
}

//Método generico para simular llamadas a base de datos

export class ApiClient {
    async obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
        console.log(`Buscando en: ${endpoint}...`);

        return new Promise((resolve) => {
            setTimeout(() => {
                //En caso real, iria un fetch() aqui
                resolve({
                    data: {} as T,
                    status: 200,
                    mensaje: "Operacion exitosa"
                });
            },1000);
        });
    }
}