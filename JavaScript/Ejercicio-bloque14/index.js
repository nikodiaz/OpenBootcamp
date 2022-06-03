const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  alert('click en el botón');
})

//JQuery

$('#btn').click(() => {
  console.log('Hola estoy usando JQuery');
})