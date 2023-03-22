"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dirección = void 0;
class Dirección {
    constructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    getCalle() {
        return this.calle;
    }
    getNumero() {
        return this.numero;
    }
    getPiso() {
        return this.piso;
    }
    getLetra() {
        return this.letra;
    }
    getCodigoPostal() {
        return this.codigoPostal;
    }
    getPoblacion() {
        return this.poblacion;
    }
    getProvincia() {
        return this.provincia;
    }
}
exports.Dirección = Dirección;
