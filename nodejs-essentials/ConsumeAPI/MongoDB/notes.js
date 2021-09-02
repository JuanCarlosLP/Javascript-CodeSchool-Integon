$(document).ready(despliegaNotas);

function despliegaNotas() {
  fetch('http://localhost:3000/notes/')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);

      json.forEach((note) => {
        $('#notas-container').append(
          `
       <div class="card" style="width: 18rem;">
            <div class="card">
              <h5 class="card-header card-title">${note.title}</h5>
              <div class="card-body">
              <div class="card-subtitle mb-2 text-muted">id: ${note._id}</div>
              <p class="card-text  text-success">${note.content}</p>
              <a href="#" class="card-link">Edit</a>
              <a href="#" class="card-link">Delete</a>
              </div>
            </div>
          </div>
        `
        );
      });
    });
}
$('#crearNota').click(function (event) {
  event.preventDefault();

  var titulo = $('#titulo').val();
  var contenido = $('#contenido').val();

  console.log(titulo, contenido);

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    title: titulo,
    content: contenido,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('http://localhost:3000/notes/', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error))
    .finally(function () {
      despliegaNotas();
    });
});
