import { Mail } from './classMail';
import { Telefono } from './classTelefono';
import { Dirección } from './classDirección';
import { Persona } from './classPersona';


export function addMailDirecciónTelefonoByDni(listadoPersonas:Persona[], dni:number, direccion:Dirección, mail:Mail, telefono:Telefono):void{
       const persona = listadoPersonas.find(p => p.getDni() === dni);
       if (persona) {
         persona.getDirecciones().push(direccion);
         persona.getMails().push(mail);
         persona.getTelefonos().push(telefono);
       }  
} 
