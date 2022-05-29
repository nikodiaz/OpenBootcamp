const nombre = 'Nicolás';
const apellido = 'Díaz';
const estudiante = `${nombre} ${apellido}`;
const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();
let numeroDeLetras = estudiante.length;
let primeraLetra = nombre.charAt(0);
let ultimaLetra = apellido.charAt(apellido.length -1 );
let sinEspacios = estudiante.replace(' ', '');
let tieneNombre = estudiante.includes(nombre);

console.log(tieneNombre)