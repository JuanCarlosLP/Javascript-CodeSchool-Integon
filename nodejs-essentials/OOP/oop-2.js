class CuentaBancaria{
    constructor(saldo, tipo){
        this.saldo = saldo;
        this.tipo = tipo;
    }

    deposito(cantidad){
        this.saldo += cantidad;
    }

    retiro(cantidad){
        this.saldo -= cantidad;
    }
}

class TarjetaCredito extends CuentaBancaria{
    constructor(saldo, tipo, fechaCorte, pagoMinimo){
        super(saldo, tipo);
        this.fechaCorte = fechaCorte;
        this.pagoMinimo = pagoMinimo;
    }


    imprimeFechaDeCorte(){
        console.log(`La fecha de corte es ${this.fechaCorte}`)
    }

    imprimePagoMinimo(){
        console.log(`El pago minimo es ${this.pagoMinimo}`)
    }
}

var main = function(){
    let cuenta1 = new CuentaBancaria(5000, 'Nomina');
    cuenta1.deposito(2000);
    cuenta1.deposito(4000);
    cuenta1.retiro(2500);
    console.log(cuenta1.saldo);
    console.log(cuenta1.tipo);

    let cuenta2 = new TarjetaCredito(5000, 'TC', '31/08/2021', '$500');
    console.log(cuenta2.saldo);
    console.log(cuenta2.tipo);
    cuenta2.imprimeFechaDeCorte();
    cuenta2.imprimePagoMinimo();
}

main();