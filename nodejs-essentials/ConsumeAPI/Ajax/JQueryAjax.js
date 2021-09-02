$(document).ready(function () {
    let endpoint = "https://jsonplaceholder.typicode.com/users"

    $("#btnSearch").click(function(){
        let idBusqueda = $("#txtSearch").val();

        $.ajax({
            url: endpoint+"/"+idBusqueda,
            contentType: "application/json",
            dataType: 'json',
            type: 'get',
            success: function (result) {

                $("#txtName").val(result.name);
                $("#txtEmail").val(result.email);
            },
            error: function(result){
                console.log("La llamada no se pudo completar")
                $("#txtName").val("Not Found");
                $("#txtEmail").val("Not Found");
            }
        });
    });
});