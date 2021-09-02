class Persona {
    constructor(nombre, apPaterno, apMaterno, email){
        this.nombre = nombre;
        this.apPaterno = apPaterno;
        this.apMaterno = apMaterno;
        this.email = email;
    }

    imprimePersona = function(){
        console.log(this);
    }
}

let persona1 = new Persona('Juan Carlos', 'Larios', 'Pinto', 'juan@gmail.com');
persona1.imprimePersona();
let persona2 = new Persona('Carlos Matias', 'Larios', 'Gasca', 'matias@gmail.com');
persona2.imprimePersona();
let persona3 = new Persona('Annia Valentina', 'Larios', 'Gasca', 'annia@gmail.com');
persona3.imprimePersona();

let personas = [];
personas.push(persona1);
personas.push(persona2);
personas.push(persona3);

const jsonFile = JSON.stringify(personas)   // Toma un objeto de JavaScript y lo transforma en una cadena JSON
console.log(jsonFile);

let persona4 = '{"nombre":"Juan Carlos","apPaterno":"Larios","apMaterno":"Pinto","email":"juan@gmail.com"}';
const newObject = JSON.parse(persona4);
console.log(newObject);          // Toma una cadena JSON y la transforma en un objeto de JavaScript