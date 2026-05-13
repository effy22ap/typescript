# Documentación de Arquitectura - Laboratorio 2

Este documento detalla las decisiones de diseño y el uso de características avanzadas de TypeScript aplicadas en el Módulo 2 para el sistema de gestión universitaria.

## 1. Modelado de Datos: Interfaces vs Types

En este proyecto, se han utilizado ambas estructuras siguiendo las mejores prácticas de la industria:

* **Interfaces (`Estudiante`, `Asignatura`):** Se eligieron interfaces para definir las entidades principales. Las interfaces son ideales para definir la "forma" de los objetos y permiten la **extensibilidad** mediante herencia, lo cual es vital en un sistema universitario que podría crecer en el futuro.
* **Types (`EstadoMatricula`):** Se utilizó un `type` para definir la **Unión Discriminada**. Los tipos son más potentes cuando se trata de combinar múltiples estructuras cerradas o trabajar con tipos de unión complejos que no necesitan ser extendidos más tarde.

### Uso de `readonly`
Se ha implementado el modificador `readonly` en todas las propiedades de identificación (`id`). Esto garantiza la integridad de los datos, evitando que el identificador único de un estudiante o asignatura sea modificado accidentalmente durante el tiempo de ejecución.

## 2. Uniones Discriminadas y Control de Flujo

La estructura `EstadoMatricula` es una **Unión Discriminada**. Cada interfaz que la compone tiene una propiedad común (`tipo`) que actúa como "etiqueta" (literal string).

Esto permite:
1.  **Seguridad en el acceso:** TypeScript sabe exactamente qué propiedades existen en cada caso (ej. `notaMedia` solo existe si el tipo es `FINALIZADA`).
2.  **Chequeo exhaustivo:** Al usar un `switch` sobre `estado.tipo`, el compilador nos avisará si olvidamos manejar alguno de los estados posibles.

## 3. Abstracción con Genéricos

El `ApiClient` utiliza **Genéricos (`<T>`)** para sus métodos de acceso a datos.

**¿Por qué genéricos?**
Sin genéricos, tendríamos que escribir una función diferente para obtener estudiantes, otra para asignaturas, etc., o usar el tipo peligroso `any`. Gracias a los genéricos:
* La lógica de red es **reutilizable** para cualquier entidad.
* Mantenemos un **tipado fuerte** de extremo a extremo: cuando pedimos un recurso de tipo `<Estudiante>`, la promesa devuelta sabe exactamente que contiene un objeto de estudiante, activando el autocompletado y la detección de errores.

---