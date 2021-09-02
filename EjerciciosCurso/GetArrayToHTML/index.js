const animals = [];

function AddAnimal(){
    let newAnimal = window.prompt('Ingresa un animal');
    animals.push(newAnimal);

    var animalsList = animals.map(animal => '<li>'+ animal +'</li>')

    document.getElementById("elementList").innerHTML = animalsList;
}