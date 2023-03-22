"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
class Mail {
    constructor(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    getTipo() {
        return this.tipo;
    }
    getDireccion() {
        return this.direccion;
    }
}
exports.Mail = Mail;
(function (Mail) {
    let Tipo;
    (function (Tipo) {
        Tipo[Tipo["Personal"] = 0] = "Personal";
        Tipo[Tipo["Empresa"] = 1] = "Empresa";
    })(Tipo = Mail.Tipo || (Mail.Tipo = {}));
    ;
})(Mail = exports.Mail || (exports.Mail = {}));
