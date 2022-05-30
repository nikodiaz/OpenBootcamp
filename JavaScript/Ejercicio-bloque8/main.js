// Una función sin parámetros que devuelva siempre "true"

function verdadero () {
  return true;
}
console.log(verdadero())

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const saludo = 'Hola soy una promesa';

const promesa = new Promise((response,reject) => {
  setTimeout(response,5000,saludo)
})

promesa
  .then(msg => console.log(msg))

// Una función generadora de índices pares automáticos

function* idPares() {
  let id = 0;
  while(true){
    id = id + 2;
    yield id
    if (id > 10) {
      return
    }
  }
}

const id = idPares()

console.log(id.next())
console.log(id.next())