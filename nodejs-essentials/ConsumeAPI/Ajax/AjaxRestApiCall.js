$(document).ready(function () {

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/",
        contentType: "application/json",
        dataType: "json",
        type: 'get',
        success: function (result) {
            console.log(result);
        },
        error: function(result) {
            console.log('La llamada no se pudo completar')
        }
    });
});