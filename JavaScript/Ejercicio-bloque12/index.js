
function fibonacci(num) {
  let secuencia = [];
  secuencia[0] = 1;
  secuencia[1] = 1;
  for (let i = 2; i < num; i++) {
    secuencia[i] = secuencia[i - 2] + secuencia[i - 1];
  }
  console.log(secuencia);

}
fibonacci(7)