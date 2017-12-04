"use strict"
/**
 * @fileOverview Aplicacion de Gestion de Parking
 * @author Oscar Casal
 * @version 1.0
 */
/**
 * @class Parking
 * @property {number} capacidad Numero de coches que puede haber en el parking
 * @prop {Array} TunelLavado Lista de coches para lavar
 * @property {Array} coches Lista de coches en el parking
 */
class Parking {
    /**
     * 
     * @param {Number} capacidad Numero de coches que puede haber en el parking
     */
    constructor(capacidad) {
        this.capacidad = capacidad;
        this.tunelLavado = [];
        this.coches = [];
    }
    /**
     * @description funcion que añade coch a nuestro garaje
     * @param {Object} objeto coche que meteremos en el parking
     * @returns {Number} -1, parking lleno, 0 ok  
     */

    MeterCoche(objeto) {
        if (this.capacidad > 0) {
            this.capacidad--;
            if (objeto.lavado == true) {
                this.tunelLavado.push(objeto.matricula)
            } else {
                this.coches.push(objeto.matricula)
            }
            return 0;
        } else {
            return -1;
        }
    }
    /**
     * @description Nos devuelve true si el coche esta en el parking o false si no esta
     * @param {String} matricula Coche a buscar
     * @return {boolean}
     */
    buscarCoche(matricula) {
        console.log("dfas")
        if ((this.tunelLavado.indexOf(matricula) >= 0) || (this.coches.indexOf(matricula) >= 0)) {
            return true
        } else {
            return false
        }

    }
}
let parking = new Parking(2);
let coche1 = {
    matricula: "G321234",
    lavado: true
}
let coche2 = {
    matricula: "G321235",
    lavado: false
}
let coche3 = {
    matricula: "G321236",
    lavado: false
}
console.log(parking.MeterCoche(coche1))
console.log(parking.MeterCoche(coche2))
console.log(parking.MeterCoche(coche1))
console.log(parking)
console.log(parking.buscarCoche("G321235"))