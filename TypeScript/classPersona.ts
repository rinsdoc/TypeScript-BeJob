import { Mail } from './classMail';
import { Telefono } from './classTelefono';
import { Dirección } from './classDirección';

export class Persona { 
    
    private nombre: string;
    private apellido: string;
    private edad: number;
    private dni: number;
    private cumpleaños: Date;
    private colorFavorito: string;
    private sexo: Persona.Sexo;
    private direcciones: Dirección[] = [];
    private mails:Mail[] = [];
    private telefonos: Telefono[] = [];
    private notas: string;

    public constructor(nombre:string, apellido:string, edad:number, dni:number, cumpleaños:Date, colorFavorito:string, 
        sexo:Persona.Sexo, direcciones:Dirección[], mails:Mail[], telefonos:Telefono[], notas:string) {
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

    public getNombre(): string {
        return this.nombre;
    }
    public getApellido(): string {
        return this.apellido;
    }
    public getEdad(): number {
        return this.edad;
    }
    public getDni(): number {
        return this.dni;
    }
    public getCumpleaños(): Date {
        return this.cumpleaños;
    }
    public getColorFavorito(): string {
        return this.colorFavorito;
    }
    public getSexo(): Persona.Sexo {
        return this.sexo;
    }
    public getDirecciones(): Dirección[] {
        return this.direcciones;
    }
    public getMails(): Mail[] {
        return this.mails;
    }
    public getTelefonos(): Telefono[] {
        return this.telefonos;
    }
    public getNotas(): string {
        return this.notas;
    }   
}

export namespace Persona {
    export enum Sexo {
        "Mujer", "Hombre", "No procede"
    };
}