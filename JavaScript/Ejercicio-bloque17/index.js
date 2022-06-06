let markers = [];
let mapa;

function initMap() {

  const posicion = {
    lat:-30.14,
    lng: -59.74
  }

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: posicion
  })

markers.push(new google.maps.Marker({
  position: Berlín,
  map,
  title: 'Berlín'
}));
markers.push(new google.maps.Marker({
  position: Copenhague,
  map,
  title: 'Copenhague'
}));
markers.push(new google.maps.Marker({
  position: Oslo,
  map,
  title: 'Oslo'
}));

  GeoPosition()
}

const Copenhague = {
  lat: 55.69,
  lng: 12.45
}
const Berlín = {
  lat: 52.50,
  lng: 13.14
}
const Oslo = {
  lat: 59.89,
  lng:10.64
}

/* function GeoPosition() {
  if(navigator.geolocation) {
    const geoLoc = navigator.geolocation;
    const watchPos = geoLoc.watchPosition( centraMapa, onError, options);
  }else {
    alert('Tu navegador no admite geolocalización')
  }
}

function centraMapa(position) {
  const nuevaPos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  }
  console.log(nuevaPos);
  marker.setPosition(nuevaPos);
  map.setCenter(nuevaPos);
}

function onError(error) {
  console.log('Se ha producido un error')
  console.error(error)
} */