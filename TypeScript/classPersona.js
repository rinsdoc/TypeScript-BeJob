"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellido, edad, dni, cumpleaños, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this.direcciones = [];
        this.mails = [];
        this.telefonos = [];
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.cumpleaños = cumpleaños;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        direcciones.forEach(d => this.direcciones.push(d));
        mails.forEach(m => this.mails.push(m));
        telefonos.forEach(t => this.telefonos.push(t));
        this.notas = notas;
    }
    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }
    getEdad() {
        return this.edad;
    }
    getDni() {
        return this.dni;
    }
    getCumpleaños() {
        return this.cumpleaños;
    }
    getColorFavorito() {
        return this.colorFavorito;
    }
    getSexo() {
        return this.sexo;
    }
    getDirecciones() {
        return this.direcciones;
    }
    getMails() {
        return this.mails;
    }
    getTelefonos() {
        return this.telefonos;
    }
    getNotas() {
        return this.notas;
    }
}
exports.Persona = Persona;
(function (Persona) {
    let Sexo;
    (function (Sexo) {
        Sexo[Sexo["Mujer"] = 0] = "Mujer";
        Sexo[Sexo["Hombre"] = 1] = "Hombre";
        Sexo[Sexo["No procede"] = 2] = "No procede";
    })(Sexo = Persona.Sexo || (Persona.Sexo = {}));
    ;
})(Persona = exports.Persona || (exports.Persona = {}));
