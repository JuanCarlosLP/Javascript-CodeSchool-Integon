class FiguraGeometrica{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }
}

class Triangulo extends FiguraGeometrica{
    calcularArea(){
        let result = (this.altura * this.base) / 2;
        console.log(`Triangulo con area de ${result}`)
    }
}

class Rectangulo extends FiguraGeometrica{
    calcularArea(){
        let result = this.altura * this.base;
        console.log(`Rectangulo con area de ${result}`)
    }
}

class Cuadrado extends FiguraGeometrica{
    constructor(lado){
        super();
        this.lado = lado;
    }

    calcularArea(){
        let result = this.lado * this.lado;
        console.log(`Cuadrado con area de ${result}`)
    }
}


let triangulo1 = new Triangulo(2, 5);
let rectangulo1 = new Rectangulo(2, 5);
let cuadrado1 = new Cuadrado(4);

triangulo1.calcularArea();
rectangulo1.calcularArea();
cuadrado1.calcularArea();