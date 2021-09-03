$(document).ready(despliegaNotas);

function despliegaNotas() {
    fetch("http://localhost:3000/notes/")
        .then((response) => response.json())
        .then((json) => {
            json.forEach((note) => {
                let nota =  `<tr>
                                <td>${note.title}<td>
                                <td>${note.content}<td>
                                <td> <a href="#" class="card-link">Edit</a> <a href="#" class="card-link">Delete</a> <td>
                            </tr>`;
                $('#table1').append(nota);
            });
        });
}

$("#crearNota").click(function (event) {
    event.preventDefault();

    var titulo = $("#titulo").val();
    var contenido = $("#contenido").val();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        title: titulo,
        content: contenido,
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    fetch("http://localhost:3000/notes/", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error))
        .finally(function () {
            despliegaNotas();
        });
});