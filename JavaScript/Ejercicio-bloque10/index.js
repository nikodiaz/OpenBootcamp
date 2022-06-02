// Configura el proyecto para utilizar los módulos de ES6

// Crea un archivo controller.js que exporte 2 funciones: suma(a, b) y multiplica(a, b)

// En el entrypoint index.js, importa el módulo controller.js

import { suma, multiplica } from "./controller.js";

// El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)

const resultado = multiplica(suma(1, 2), suma(4, 5));
console.log(resultado);

// Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)

import chalk from "chalk";

// Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde

console.log(chalk.green(resultado));
