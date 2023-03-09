class Carro{
    constructor(marca, cor, gasolina_restante,litrosKm){
        this.marca = marca;
        this.cor = cor;
        this.gasolina_restante = gasolina_restante;
        this.Litroskm = litrosKm;
    }

    dirigir_carro(km){
        this.gasolina_restante -= (km / this.Litroskm)
    }

    abastecer_carro(litros){
        this.gasolina_restante += litros
    }
}

let carro1 = new Carro("gol bolinha", "branco", 20, 10);

console.log(carro1)

carro1.dirigir_carro(100)

console.log(carro1)

carro1.abastecer_carro(5)

console.log(carro1)
