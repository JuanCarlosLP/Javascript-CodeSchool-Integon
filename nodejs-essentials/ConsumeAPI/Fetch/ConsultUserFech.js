let txtSearch = document.getElementById("txtSearch");
let btnSearch = document.getElementById("btnSearch");
let txtName = document.getElementById("txtName");
let txtEmail = document.getElementById("txtEmail");

btnSearch.addEventListener('click', function () {
    Searching();
})

function Searching() {
    fetch(`https://jsonplaceholder.typicode.com/users/${txtSearch.value}`)
        .then(Response => {
            if(!Response.ok) throw Error(Response.status);
            return Response.json();
        })
        .then(json => {
            txtName.value = json.name;
            txtEmail.value = json.email;
        }).catch(error => console.log("Not Found"));
}