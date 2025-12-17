fetch('salar-uyuni.json')
.then(response => response.json())
.then(data => {
const d = data.destino;


document.getElementById('nombre').textContent = d.nombre;
document.getElementById('ubicacion').textContent = d.departamento + ', ' + d.pais;
document.getElementById('descripcion').textContent = d.descripcion;
document.getElementById('imagen').src = d.imagen;


const actividades = document.getElementById('actividades');
d.actividades.forEach(a => {
actividades.innerHTML += `<li>${a}</li>`;
});


document.getElementById('precios').textContent =
`Bolivianos: ${d.precios.bolivianos} ${d.precios.moneda} | Extranjeros: ${d.precios.extranjeros} ${d.precios.moneda}`;


const recomendaciones = document.getElementById('recomendaciones');
d.recomendaciones.forEach(r => {
recomendaciones.innerHTML += `<li>${r}</li>`;
});
});