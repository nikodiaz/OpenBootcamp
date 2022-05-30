// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datosPersonales = {
  nombre: 'Nicolás',
  apellido: 'Díaz',
  edad: 25,
  altura: 171,
  esDesarrollador: true,
}

// Una variable que obtenga tu edad a partir del objeto anterior

const edad = datosPersonales.edad;

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const circuloSocial = [
  {
    nombre: 'Francisco',
    apellido: 'Brest',
    edad: 24,
    altura: 181,
    esDesarrollador: false,
  },
  {
    nombre: 'Lautaro',
    apellido: 'Ponze',
    edad: 23,
    altura: 178,
    esDesarrollador: false,
  },
  {...datosPersonales}
]

//Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const listaOrdenada = circuloSocial.sort((a, b) => a.edad - b.edad);

console.log(listaOrdenada)