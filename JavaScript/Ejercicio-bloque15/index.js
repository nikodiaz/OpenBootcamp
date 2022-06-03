const nombre = 'Nicolás';
const apellido = 'Díaz';

const persona = {
  nombre: nombre,
  apellido: apellido
}

//sessionStorage.setItem('persona', JSON.stringify(persona));
//localStorage.setItem('persona', JSON.stringify(persona));

let now = new Date();
let time = now.getTime();
let expireTime = time + 120000;
now.setTime(expireTime);

//document.cookie = `persona=${JSON.stringify(persona)};expires=${now.toUTCString()}`;