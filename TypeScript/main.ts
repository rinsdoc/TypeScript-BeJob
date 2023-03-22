import { Mail } from './classMail';

const mail = new Mail(Mail.Tipo.Personal, 'a@a.com');
const mail1 = new Mail(Mail.Tipo.Empresa, 'aa@a.a');

const listadoMails: Mail[] = [];
listadoMails.push(mail);
listadoMails.push(mail1);

import { Telefono } from './classTelefono';

const telefono = new Telefono(Telefono.Tipo.Personal,981223344);
const telefono1 = new Telefono(Telefono.Tipo.Empresa,987665544);

const listadoTelefonos: Telefono[] = [];
listadoTelefonos.push(telefono);
listadoTelefonos.push(telefono1);

import { Dirección } from './classDirección';

const direccion = new Dirección('Calle B', 1, 3, 'B', 28001, 'Madrid', 'Madrid');
const direccion1 = new Dirección('Calle A', 1, 3, 'B', 28001, 'Madrid', 'Madrid');

const listadoDirecciones: Dirección[] = [];
listadoDirecciones.push(direccion);
listadoDirecciones.push(direccion1);

import { Persona } from './classPersona';

const persona = new Persona('Raquel', 'Suarez', 24, 12345670, new Date(19951203), 'azul', Persona.Sexo.Mujer, listadoDirecciones, listadoMails, listadoTelefonos, 'aa');
const persona1 = new Persona('Lucia', 'Suarez', 25, 12345679, new Date(19940623), 'rojo', Persona.Sexo.Mujer, listadoDirecciones, listadoMails, listadoTelefonos, 'bb');
const persona2 = new Persona('Andrea', 'Suarez', 27, 12345678, new Date(19930913), 'naranja', Persona.Sexo.Mujer, listadoDirecciones, listadoMails, listadoTelefonos, 'cc');

const listadoPersonas: Persona[] = [];
listadoPersonas.push(persona);
listadoPersonas.push(persona1);
listadoPersonas.push(persona2);

listadoPersonas.forEach(person => console.log(person));

console.log("Persona antes de la función");
const busqDni = 12345670;

listadoPersonas.forEach(person => {
    if(person.getDni() == busqDni){
        person.getDirecciones().forEach(dire => console.log(dire));
        person.getMails().forEach(m => console.log(m));
        person.getTelefonos().forEach(t => console.log(t));
    }
});

const direccion2 = new Dirección('Calle C', 1, 3, 'B',28001, 'Madrid', 'Madrid');
const telefono2 = new Telefono(Telefono.Tipo.Empresa,123456789);
const mail2 = new Mail(Mail.Tipo.Empresa, 'cc@c.c');

import { addMailDirecciónTelefonoByDni } from './functions';

addMailDirecciónTelefonoByDni(listadoPersonas, busqDni, direccion2, mail2, telefono2);

console.log("Persona despues de la función\n");

listadoPersonas.forEach(person => {
    if(person.getDni() == busqDni){
        person.getDirecciones().forEach(dire => console.log(dire));
        person.getMails().forEach(m => console.log(m));
        person.getTelefonos().forEach(t => console.log(t));
    }
});
