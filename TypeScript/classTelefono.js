"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
class Telefono {
    constructor(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    getTipo() {
        return this.tipo;
    }
    getNumero() {
        return this.numero;
    }
}
exports.Telefono = Telefono;
(function (Telefono) {
    let Tipo;
    (function (Tipo) {
        Tipo[Tipo["Personal"] = 0] = "Personal";
        Tipo[Tipo["Empresa"] = 1] = "Empresa";
    })(Tipo = Telefono.Tipo || (Telefono.Tipo = {}));
    ;
})(Telefono = exports.Telefono || (exports.Telefono = {}));
