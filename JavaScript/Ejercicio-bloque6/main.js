// Una variable que contenga la lista de la compra (mínimo 5 elementos)

const listaDeCompra = ['Harina', 'Huevos', 'Arroz', 'Queso', 'Leche'];

// Modifica la lista de la compra y añádele "Aceite de Girasol"

listaDeCompra.push('Aceite de Girasol');

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

listaDeCompra.pop('Aceite de Girasol');

console.log(listaDeCompra);

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const peliculasFavoritas = [
  {
    título: 'Deadpool',
    director: 'Tim Miller',
    fecha: 2016,
  },
  {
    título: 'The Revenant',
    director: 'Alejandro González Iñárritu',
    fecha: 2015,
  },
  {
    título: 'Soy Leyenda',
    director: 'Francis Lawrence',
    fecha: 2007,
  }
];

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const peliculasFavoritasActuales = peliculasFavoritas.filter(pelicula => pelicula.fecha > 2010);

console.log(peliculasFavoritasActuales);

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const directores = peliculasFavoritas.map(pelicula => pelicula.director);

console.log(directores);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const títulos = peliculasFavoritas.map(pelicula => pelicula.título);

console.log(títulos);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const tituloYDirectorConcat = títulos.concat(directores);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const tituloYDirectorSpread = [...títulos, ...directores];