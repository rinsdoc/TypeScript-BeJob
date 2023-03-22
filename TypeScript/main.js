"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Mail
const classMail_1 = require("./classMail");
const mail = new classMail_1.Mail(classMail_1.Mail.Tipo.Personal, 'a@a.com');
const mail1 = new classMail_1.Mail(classMail_1.Mail.Tipo.Empresa, 'aa@a.a');
//listado mails
const listadoMails = [];
listadoMails.push(mail);
listadoMails.push(mail1);
//Telefono
const classTelefono_1 = require("./classTelefono");
const telefono = new classTelefono_1.Telefono(classTelefono_1.Telefono.Tipo.Personal, 981223344);
const telefono1 = new classTelefono_1.Telefono(classTelefono_1.Telefono.Tipo.Empresa, 987665544);
//listado telefonos
const listadoTelefonos = [];
listadoTelefonos.push(telefono);
listadoTelefonos.push(telefono1);
//Dirección
const classDirecci_n_1 = require("./classDirecci\u00F3n");
//creo las direcciones
const direccion = new classDirecci_n_1.Dirección('Calle B', 1, 3, 'B', 28001, 'Madrid', 'Madrid');
const direccion1 = new classDirecci_n_1.Dirección('Calle A', 1, 3, 'B', 28001, 'Madrid', 'Madrid');
//listado direcciones
const listadoDirecciones = [];
listadoDirecciones.push(direccion);
listadoDirecciones.push(direccion1);
//Persona
const classPersona_1 = require("./classPersona");
const persona = new classPersona_1.Persona('Raquel', 'Suarez', 24, 12345670, new Date(19951203), 'azul', classPersona_1.Persona.Sexo.Mujer, listadoDirecciones, listadoMails, listadoTelefonos, 'aa');
const persona1 = new classPersona_1.Persona('Lucia', 'Suarez', 25, 12345679, new Date(19940623), 'rojo', classPersona_1.Persona.Sexo.Mujer, listadoDirecciones, listadoMails, listadoTelefonos, 'bb');
const persona2 = new classPersona_1.Persona('Andrea', 'Suarez', 27, 12345678, new Date(19930913), 'naranja', classPersona_1.Persona.Sexo.Mujer, listadoDirecciones, listadoMails, listadoTelefonos, 'cc');
//array para almacenar información ("lista")
const listadoPersonas = [];
listadoPersonas.push(persona);
listadoPersonas.push(persona1);
listadoPersonas.push(persona2);
listadoPersonas.forEach(person => console.log(person));
console.log("Persona antes de la función");
const busqDni = 12345670;
listadoPersonas.forEach(person => {
    if (person.getDni() == busqDni) {
        person.getDirecciones().forEach(dire => console.log(dire));
        person.getMails().forEach(m => console.log(m));
        person.getTelefonos().forEach(t => console.log(t));
    }
});
const direccion2 = new classDirecci_n_1.Dirección('Calle C', 1, 3, 'B', 28001, 'Madrid', 'Madrid');
const telefono2 = new classTelefono_1.Telefono(classTelefono_1.Telefono.Tipo.Empresa, 123456789);
const mail2 = new classMail_1.Mail(classMail_1.Mail.Tipo.Empresa, 'cc@c.c');
const functions_1 = require("./functions");
(0, functions_1.addMailDirecciónTelefonoByDni)(listadoPersonas, busqDni, direccion2, mail2, telefono2);
console.log("Persona despues de la función\n");
listadoPersonas.forEach(person => {
    if (person.getDni() == busqDni) {
        person.getDirecciones().forEach(dire => console.log(dire));
        person.getMails().forEach(m => console.log(m));
        person.getTelefonos().forEach(t => console.log(t));
    }
});
