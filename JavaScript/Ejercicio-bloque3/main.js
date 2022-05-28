// Factorial bucle for

let numero = 10;
let total = 1;
for (let i = 1; i <= numero; i++) {
  total = total * i
}
console.log(total)

// Factorial bucle while

while(numero >= 1) {
  total = total * numero;
  numero--
}
console.log(total)

// Factorial break

while(true) {
  total = total * numero;
  numero--;
  if(numero === 1) break;
}
console.log(total)