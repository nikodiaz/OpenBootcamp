const parrafos = document.querySelectorAll('.parrafo');
const secciones = document.querySelectorAll('.seccion');
const papelera = document.querySelector('#papelera');

parrafos.forEach( parrafo => {
  parrafo.addEventListener('dragstart', e => {
    console.log('Arrastrando el párrafo: ' + parrafo.textContent);
    parrafo.classList.add('draggable');
    e.dataTransfer.setData('id', parrafo.id);
  })
  parrafo.addEventListener('dragend', () => {
    console.log('Terminé de arrastrar');
    parrafo.classList.remove('draggable');
  })
} )

secciones.forEach( seccion => {
  seccion.addEventListener('dragover', e => {
    e.preventDefault();
    //console.log('Drag Over');
  })
  seccion.addEventListener('drop', e => {
    const parrafo_id = e.dataTransfer.getData('id');
    console.log(parrafo_id);
    const parrafo = document.getElementById(parrafo_id);
    seccion.appendChild(parrafo);
  })
} )

papelera.addEventListener('dragover', e => {
  e.preventDefault();
})

papelera.addEventListener('drop', e => {
  const parrafo_id = e.dataTransfer.getData('id');
  const parrafo = document.getElementById(parrafo_id);

  parrafo.remove();
})