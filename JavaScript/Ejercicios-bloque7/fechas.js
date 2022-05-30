// La fecha de hoy

const hoy = new Date();
console.log(hoy)

// La fecha de tu nacimiento

const nacimiento = new Date(1996, 6 , 18);
console.log(nacimiento)

// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

const masTarde = hoy > nacimiento;
console.log(masTarde)

// Una variable que contenga el día de tu nacimiento

const diaNacimiento = nacimiento.getDate();
console.log(diaNacimiento)

// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

const mesNacimiento = nacimiento.getMonth();
console.log(mesNacimiento)

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const anioNacimiento = nacimiento.getFullYear();
console.log(anioNacimiento)