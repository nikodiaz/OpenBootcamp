/* 
- Una clase llamada "Estudiante" que tenga:

- Una variable llamada nombre

- Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

- Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

- Crea una nueva instancia de "Estudiante"

- Haz la llamada al método obtenDatos
*/

class Estudiante {
  constructor(nombre, asignaturas) {
    this.nombre = nombre;
    this.asignaturas = asignaturas;
  }
  obtenDatos() {
    return {
      nombre: this.nombre,
      asignaturas: this.asignaturas
    }
  }
}

const Nico = new Estudiante('Nicolás', ['Javascript', 'HTML', 'CSS'])
console.log(Nico)
console.log(Nico.obtenDatos())
