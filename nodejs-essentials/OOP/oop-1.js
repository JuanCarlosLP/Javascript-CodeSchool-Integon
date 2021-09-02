class Animal {
    constructor(categoria){
        this.categoria = categoria;
    }
}


let perro = new Animal('perro');
let gato = new Animal('gato');

console.log(perro.categoria);
console.log(gato.categoria);